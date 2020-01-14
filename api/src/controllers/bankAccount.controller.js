import User from '../models/user.model';

// create new bank account for a user
exports.create = async (req, res) => {
  // TODO: just patch in the bank account instead of re-saving the full user object?
  try {
    const user = req.user;
    user.bankAccounts.push(req.body);
    const userUpdated = await user.save();
    res.status(201).json(userUpdated);
  } catch (err) {
    res.status(500).json({ message: `Unable to create account`, error: err });
  }
};

// retrieve all bank accounts for a user
exports.findAll = async (req, res) => {
  try {
    res.json(req.user.bankAccounts);
  } catch (err) {
    res.status(500).json({ message: `Unable to find user's accounts`, error: err });
  }
};

// retrieve a single bank account for a user
exports.findOne = (req, res) => {
  const account = req.user.bankAccounts.id(req.params.accountId);
  if (account == null) {
    return res.status(404).json({ message: `Account does not exist` });
  }
  res.json(account);
};

// update a bank account for a user
exports.update = async (req, res) => {
  try {
    const accountUpdated = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
    if (!accountUpdated) {
      return res.status(404).json({ message: `Could not update account type, it does not exist` });
    }
    res.status(200).json(accountUpdated);
  } catch (err) {
    res.status(500).json({ message: `Unable to update account type`, error: err });
  }
};

// delete a bank account for a user
exports.delete = async (req, res) => {
  try {
    const user = req.user;
    if (user.bankAccounts.id(req.params.accountId) == null) {
      return res.status(404).json({ message: `Unable to delete, could not find the account` });
    }
    // remove from array
    const result = await user.updateOne({
      $pull: {
        bankAccounts: {
          _id: req.params.accountId
        }
      }
    });
    res.json({ message: "Account successfully deleted" });
  } catch (err) {
    res.status(500).json({ message: `Unable to delete account`, error: err });
  }
};
