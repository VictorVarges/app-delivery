const service = require('../services/index');

const getUsers = async (_req, res) => {
  try {
    const users = await service.getUsers();

    if (users === null) return res.status(404).json({ message: 'Not Found' });

    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getUsers,
};