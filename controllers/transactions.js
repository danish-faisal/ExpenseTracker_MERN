const Transaction = require('../models/Transaction');

// @desc        Get all transactions
// @routes      GET /api/v1/transactions
// @access      Public
exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find();

        return res.status(200).send({
            success: true,
            count: transactions.length,
            data: transactions
        });
    } catch (err) {
        return res.status(500).send({
            success: false,
            error: 'Server error'
        });
    }
}

// @desc        Add transactions
// @routes      POST /api/v1/transactions
// @access      Public
exports.addTransaction = async (req, res, next) => {
    res.send('POST Transaction');
}

// @desc        Delete transactions
// @routes      DELETE /api/v1/transactions/:id
// @access      Public
exports.deleteTransaction = async (req, res, next) => {
    res.send('DELETE Transaction');
}