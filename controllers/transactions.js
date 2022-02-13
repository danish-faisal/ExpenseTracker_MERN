const Transaction = require('../models/Transaction');

// @desc        Get all transactions
// @routes      GET /api/v1/transactions
// @access      Public
exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find();

        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

// @desc        Add transactions
// @routes      POST /api/v1/transactions
// @access      Public
exports.addTransaction = async (req, res, next) => {
    try {
        const transaction = await Transaction.create(req.body);

        return res.status(201).json({
            success: true,
            data: transaction
        });
    } catch (err) {
        if (err.name == 'ValidationError') {
            const errors = Object.values(err.errors).map(val => val.message);

            return res.status(400).json({
                success: false,
                errors: errors
            });
        } else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            });
        }
    }
}

// @desc        Delete transactions
// @routes      DELETE /api/v1/transactions/:id
// @access      Public
exports.deleteTransaction = async (req, res, next) => {
    res.send('DELETE Transaction');
}