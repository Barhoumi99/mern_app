const Transaction = require("../models/Transaction");
const { visitor } = require('./userController')

exports.getTransactions = async (req, res) => {
  try {
  const transactions = await Transaction.find({ User: visitor._id });
    res.status(200).json(transactions);
    console.log(transactions)
  } catch (error) {
    res.status(500).json({ message: 'something went wrong in the getTransactions controller' });
    console.log('could not get transactions')
  }
};

exports.addTransaction = async (req, res) => {
  const { description, amount, category, type, date } = req.body;

  try {
    const transaction = new Transaction({
      User: visitor._id,
      description,
      amount,
      category,
      type,
      date,
    });
    await transaction.save();

    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ message: 'something went wrong in the addTransaction function in transactionController.js' });
  }
};

exports.updateTransaction = async (req, res) => {
  const { id } = req.params;
  const { description, amount, category, type, date } = req.body;

  try {
    const transaction = await Transaction.findByIdAndUpdate(
      id,
      { description, amount, category, type, date },
      { new: true }
    );
    res.status(200).json(transaction);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong in the updateTransaction function in transactionController.js' });
  }
};

exports.deleteTransaction = async (req, res) => {
  const { id } = req.params;

  try {
    await Transaction.findByIdAndDelete(id);
    res.status(200).json({ message: "Transaction deleted" });
  } catch (error) {
    res.status(500).json({ message: 'something went wrong in the deleteTransaction function in transactionController.js' });
  }
};
