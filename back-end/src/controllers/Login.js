const service = require('../services/service');

const userLogin = async (req, res) => {
  const { email } = req.body;
  try {
    console.log('entrou try');
    const alreadyExist = await service.loginUser(email);

    if (alreadyExist === null) return res.status(404).json({ message: 'Not Found' });
    console.log('antes do return');
    return res.status(200).json({ message: 'Login Success' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  userLogin,
};
