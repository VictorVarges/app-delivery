const { loginUser } = require('./Login.service');
const { registerUserService } = require('./Register.service');
const { getProducts } = require('./Customer.service');

module.exports = {
  loginUser,
  registerUserService,
  getProducts,
};
