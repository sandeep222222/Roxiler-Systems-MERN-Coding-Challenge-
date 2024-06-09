const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

router.get('/initialize', transactionController.initializeDatabase);
router.get('/transactions', transactionController.getTransactions);
router.get('/statistics/:month', transactionController.getStatistics);
router.get('/barchart/:month', transactionController.getBarChart);
router.get('/piechart/:month', transactionController.getPieChart);
router.get('/combined/:month', transactionController.getCombinedData);

module.exports = router;
