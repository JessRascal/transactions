import User from '../models/user.model';

// create new transaction
exports.create = (req, res) => {
  res.json({ message: `Creating transaction` });
};

// retrieve all transactions
exports.findAll = (req, res) => {
  res.json({ message: `Getting all transactions` });
};

// retrieve a single transaction
exports.findOne = (req, res) => {
  res.json({ message: `Getting transaction ${req.params.id}` });
};

// update a transaction
exports.update = (req, res) => {
  res.json({ message: `Updating transaction ${req.params.id}` });
};

// delete a transation
exports.delete = (req, res) => {
  res.json({ message: `Deleting transaction ${req.params.id}` });
};
