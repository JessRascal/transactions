import User from '../models/user.model';

// create new bank account for a user
exports.create = async (req, res) => {
  try {
    const user = req.user;
    user.bankAccounts.push(req.body);
    const result = await user.save();
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ message: `Unable to create user`, error: err });
  }
};

// retrieve all bank accounts for a user
exports.findAll = async (req, res) => {
  try {
    const result = await User.findById(req.params.userId, 'bankAccounts');
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: `Unable to find user's bank accounts`, error: err });
  }
};

// retrieve a single bank account for a user
exports.findOne = async (req, res) => {
  try {
    const result = User.findById(req.params.userId, (err, user) => {
      return user.bankAccounts.id(req.params.accountId);
      // console.log(`account inside: ${account}`); // TODO: REMOVE
      // return account;
    });
    // console.log(`account: ${JSON.stringify(result)}`); // TODO: REMOVE
    console.log(`account:`); // TODO: REMOVE
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: `Unable to find user's bank account`, error: err });
  }
};

// update a bank account for a user
exports.update = (req, res) => {
  res.json({ message: `Updating bank account ${req.params.accountId} for user ${req.params.userId}` });
};

// delete a bank account for a user
exports.delete = (req, res) => {
  res.json({ message: `Deleting bank account ${req.params.accountId} for user ${req.params.userId}` });
};
