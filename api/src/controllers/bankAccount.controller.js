import User from '../models/user.model';

// create new bank account for a user
exports.create = async (req, res) => {
  try {
    const userUpdated = await User.findByIdAndUpdate(req.params.userId, { $push: { bankAccounts: req.body } }, { new: true });
    // get the last account in the array (the one just added)
    const accountNew = userUpdated.bankAccounts[userUpdated.bankAccounts.length - 1];
    res.status(201).json(accountNew);
  } catch (err) {
    res.status(500).json(err);
  }
};

// retrieve all bank accounts for a user
exports.findAll = async (req, res) => {
  try {
    const user = req.user;
    res.json(user.bankAccounts);
  } catch (err) {
    res.status(500).json(err);
  }
};

// retrieve a single bank account for a user
exports.findOne = (req, res) => {
  const user = req.user;
  const account = user.bankAccounts.id(req.params.accountId);
  if (account == null) {
    return res.status(404).json({ message: `Account does not exist` });
  }
  res.json(account);
};

// update a bank account for a user
exports.update = async (req, res) => {
  try {
    const user = req.user;
    const accountUpdated = user.bankAccounts.id(req.params.accountId);
    if (!accountUpdated) {
      return res.status(404).json({ message: `Could not update account type, it does not exist` });
    }
    accountUpdated.update(req.body); // await needed?
    res.status(200).json(accountUpdated);
  } catch (err) {
    res.status(500).json(err);
  }
};

// delete a bank account for a user
exports.delete = async (req, res) => {
  try {
    const user = req.user;
    if (user.bankAccounts.id(req.params.accountId) == null) {
      return res.status(404).json({ message: `Unable to delete, could not find the account` });
    }
    user.bankAccounts.id(req.params.accountId).remove(); // await needed
    user.save(); // optimise?
    res.send();
  } catch (err) {
    res.status(500).json(err);
  }
};
