import User from '../models/user.model';

// create new bank account for a user
exports.create = (req, res) => {
  res.json({ message: `Creating bank account for user ${req.params.id}` });
};

// retrieve all bank accounts for a user
exports.findAll = (req, res) => {
  res.json({ message: `Getting all bank accounts for user ${req.params.id}` });
};

// retrieve a single bank account for a user
exports.findOne = (req, res) => {
  res.json({ message: `Getting bank account ${req.params.accountId} for user ${req.params.id}` });
};

// update a bank account for a user
exports.update = (req, res) => {
  res.json({ message: `Updating bank account ${req.params.accountId} for user ${req.params.id}` });
};

// delete a bank account for a user
exports.delete = (req, res) => {
  res.json({ message: `Deleting bank account ${req.params.accountId} for user ${req.params.id}` });
};
