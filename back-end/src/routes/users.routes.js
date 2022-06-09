const express = require('express');

const router = express.Router();

const controllers = require('../controllers/index');

router.get('/', controllers.getUsers);

module.exports = router;
