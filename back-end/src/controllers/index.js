const { userLogin } = require('./Login.controller');
const { registerController } = require('./Register.controller');
const { getProducts } = require('./Customer.controller');

module.exports = {
  userLogin,
  registerController,
  getProducts,
};
