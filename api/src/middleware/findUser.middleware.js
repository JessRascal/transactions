import User from '../models/user.model';

const findUser = async (req, res, next) => {
  let user;
  try {
    user = await User.findById(req.params.userId);
    if (user == null) {
      return res.status(404).json({ message: `User does not exist` });
    }
  } catch (err) {
    return res.status(500).json({ message: `Cannot find user`, error: err });
  }
  req.user = user;
  next();
}

export default findUser;
