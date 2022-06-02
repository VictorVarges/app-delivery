const md5 = require('md5');

const service = require('../services/service');

const userLogin = async (req, res) => {
  console.log(req.body, '====================');
  const { email, password } = req.body;
  const myPassword = md5(toString(password));
  try {
    const alreadyExist = await service.loginUser(email, myPassword);

    if (!alreadyExist) return res.status(404).json({ message: 'Not Found' });

    return res.status(200).json({ message: 'Login Success' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Error' });
  }
};

module.exports = {
  userLogin,
};
