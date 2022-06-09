const { Sales, Users } = require('../database/models');

const getSales = async () => {
   const result = await Sales.findAll();
   return result;
};

const createSale = async (sale) => {
  const { email, mySeller, myAdress, myAdressNumber, totalCart } = sale;

  const user = await Users.findOne({ where: { email } });

  if (!user) return null;

  const mySale = {
    userId: user.id,
    sellerId: mySeller,
    totalPrice: totalCart.toFixed(2),
    deliveryAddress: myAdress,
    deliveryNumber: myAdressNumber,
    saleDate: '01/01/2022',
    status: 'Pendente',
  };

  const result = await Sales.create(mySale);

  if (!result) return null;

  return result;
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