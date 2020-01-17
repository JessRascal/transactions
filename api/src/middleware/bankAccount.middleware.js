import User from '../models/user.model';

export async function findAccounts(req, res, next) {
  let user;
  try {
    user = await User.findById(req.params.userId).select('bankAccounts');
    if (user == null) {
      return res.status(404).json({ message: `User does not exist so unable to get accounts` });
    }
  } catch (err) {
    return res.status(500).json({ message: `Cannot find accounts`, error: err });
  }
  req.bankAccounts = user.bankAccounts;
  next();
}
