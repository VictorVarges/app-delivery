const { Users } = require('../database/models');

const loginUser = async (email) => {
  console.log(email, 'log email');
  const result = await Users.findOne({ where: { email } });

  if (!result) return null;

  return result;
};

module.exports = {
  loginUser,
};
