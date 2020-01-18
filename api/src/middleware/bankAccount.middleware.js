import User from '../models/user.model';

export async function findAccounts(req, res, next) {
  let user;
  try {
    user = await User.findById(req.params.userId).select('bankAccounts');
    if (user == null) {
      return res.status(404).json({ message: `User does not exist so unable to get accounts` });
    }
  } catch (err) {
    return res.status(500).json(err);
  }
  req.bankAccounts = user.bankAccounts;
  next();
}

export async function findSingleAccount(req, res, next) {
  let user;
  try {
    account = await User.findOne({ _id: req.params.userId, 'bankAccounts._id': req.params.accountId });
    console.log(`Account: ${account}`); // TODO: REMOVE
    if (account == null) {
      return res.status(404).json({ message: `Account does not exist` });
    }
  } catch (err) {
    return res.status(500).json(err);
  }
  req.bankAccount = account;
  next();
}
