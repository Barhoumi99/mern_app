const express = require('express');
const router = express.Router();
const { getTransactions, addTransaction, updateTransaction, deleteTransaction } = require('../controllers/transactionController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, getTransactions);
router.post('/add-transaction', protect, addTransaction);
router.put('/update-transaction/:id', protect, updateTransaction);
router.delete('/delete-transaction/:id', protect, deleteTransaction);

module.exports = router;