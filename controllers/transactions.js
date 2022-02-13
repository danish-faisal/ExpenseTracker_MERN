// @desc        Get all transactions
// @routes      GET /api/v1/transactions
// @access      Public
exports.getTransactions = (req, res, next) => {
    res.send('GET Transactions');
}

// @desc        Add transactions
// @routes      POST /api/v1/transactions
// @access      Public
exports.addTransaction = (req, res, next) => {
    res.send('POST Transaction');
}

// @desc        Delete transactions
// @routes      DELETE /api/v1/transactions/:id
// @access      Public
exports.deleteTransaction = (req, res, next) => {
    res.send('DELETE Transaction');
}