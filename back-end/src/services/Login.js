const { users } = require('../database/models');

const loginUser = async (email, password) => {
  const result = await users.findOne({ where: { email, password } })

  if (!result) return null;

  return result;
};

module.exports = {
  loginUser,
};
