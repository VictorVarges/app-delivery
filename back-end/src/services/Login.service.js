const md5 = require('md5');
const { Users } = require('../database/models');

const loginUser = async (email, password) => {
  const validPassword = md5(password);

  const result = await Users.findOne({ where: { email, password: validPassword } });

  if (!result) return null;

  return result;
};

module.exports = {
  loginUser,
};
