const { loginUser } = require('./Login.service');
const { registerUserService } = require('./Register.service');
const { getProducts } = require('./Customer.service');
const { getSales, createSale, getSaleById } = require('./Sales.service');
const { getUsers } = require('./User.service');

module.exports = {
  loginUser,
  registerUserService,
  getProducts,
  getSales,
  createSale,
  getUsers,
  getSaleById,
};
