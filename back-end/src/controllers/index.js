const { userLogin } = require('./Login.controller');
const { registerController } = require('./Register.controller');
const { getProducts } = require('./Customer.controller');
const { getSales, createSales } = require('./Sales.controller');
const { getUsers } = require('./User.contoller');

module.exports = {
  userLogin,
  registerController,
  getProducts,
  getSales,
  createSales,
  getUsers,
};
