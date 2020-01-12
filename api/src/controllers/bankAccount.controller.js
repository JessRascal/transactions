import User from '../models/user.model';

// create new bank account for a user
exports.create = async (req, res) => {
  try {
    res.status(201).json(res.user);
  } catch (err) {
    res.status(400).json({ message: `Unable to create user`, error: err });
  }
  // try {
  //   let user = new User(req.body);
  //   let result = await user.save();
  //   res.json(result);
  // } catch (err) {
  //   res.status(500).json({ message: `Unable to create user - ${err}` });
  // }
};

// retrieve all bank accounts for a user
exports.findAll = (req, res) => {
  res.json({ message: `Getting all bank accounts for user ${req.params.userId}` });
};

// retrieve a single bank account for a user
exports.findOne = (req, res) => {
  res.json({ message: `Getting bank account ${req.params.accountId} for user ${req.params.userId}` });
};

// update a bank account for a user
exports.update = (req, res) => {
  res.json({ message: `Updating bank account ${req.params.accountId} for user ${req.params.userId}` });
};

// delete a bank account for a user
exports.delete = (req, res) => {
  res.json({ message: `Deleting bank account ${req.params.accountId} for user ${req.params.userId}` });
};
