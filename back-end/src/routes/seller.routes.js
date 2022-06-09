const express = require('express');
const middleware = require('../middlewares/index');

const router = express.Router();

const controllers = require('../controllers/index');

router.get('/sales', controllers.getSales);
router.post('/sales', middleware.validToken, controllers.createSales);
router.get('/sales/:id', controllers.getSaleById);

module.exports = router;
