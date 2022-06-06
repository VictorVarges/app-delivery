const service = require('../services/index');

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    console.log(email, password);
    const alreadyExist = await service.loginUser(email, password);

    if (alreadyExist === null) return res.status(404).json({ message: 'Not Found' });
    console.log('already: ', alreadyExist);

    return res.status(200).json(alreadyExist);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  userLogin,
};
