const moment = require('moment');
const { Sales, Users, SalesProducts } = require('../database/models');
const { bulkInsert } = require('./helper/bulkInsert');

const getSales = async () => {
   const result = await Sales.findAll();
   return result;
};

const createSale = async (sale, products) => {
  const { email, mySeller, myAdress, myAdressNumber, totalCart } = sale;
  
  const user = await Users.findOne({ where: { email } });

  if (!user) return null;

  const mySale = {
    userId: user.id,
    sellerId: mySeller,
    totalPrice: totalCart.toFixed(2),
    deliveryAddress: myAdress,
    deliveryNumber: myAdressNumber,
    saleDate: moment().format(),
    status: 'Pendente',
  };

  const result = await Sales.create(mySale);
  const resultInsert = bulkInsert(result.id, products);

  const resultSalesProducts = await SalesProducts.bulkCreate(resultInsert);
  
  if (!result) return null;

  return { result, resultSalesProducts };
};

const getSaleById = async (id) => {
  console.log('log id', id);

  const result = await Sales.findAll({
    include: [{ model: Users, as: 'user' }, { model: Users, as: 'seller' }],
  });
  
  console.log('log result', result);
   
  return result;
};

module.exports = { 
  getSales,
  createSale,
  getSaleById,
};