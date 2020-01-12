import User from '../models/user.model';

// create new bank account for a user
exports.create = async (req, res) => {
  try {
    const user = req.user;
    user.bankAccounts.push(req.body);
    const userNew = await user.save();
    res.status(201).json(userNew);
  } catch (err) {
    res.status(500).json({ message: `Unable to create account`, error: err });
  }
};

// retrieve all bank accounts for a user
exports.findAll = async (req, res) => {
  try {
    const accounts = await User.findById(req.params.userId, 'bankAccounts');
    res.json(accounts);
  } catch (err) {
    res.status(500).json({ message: `Unable to find user's accounts`, error: err });
  }
};

// retrieve a single bank account for a user
exports.findOne = async (req, res) => {
  try {
    const account = req.user.bankAccounts.id(req.params.accountId);
    if (account == null) {
      return res.status(404).json({ message: `Account does not exist` });
    }
    res.json(account);
  } catch (err) {
    res.status(500).json({ message: `Unable to find user's account`, error: err });
  }
};

// update a bank account for a user
exports.update = (req, res) => {
  res.json({ message: `Updating account ${req.params.accountId} for user ${req.params.userId}` });
};

// delete a bank account for a user
exports.delete = (req, res) => {
  res.json({ message: `Deleting account ${req.params.accountId} for user ${req.params.userId}` });
};
