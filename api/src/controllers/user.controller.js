import User from '../models/user.model';

// create new user
exports.create = async (req, res) => {
  try {
    let user = new User(req.body);
    let result = await user.save();
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ message: `Unable to create user - ${err}` });
  }
};

// retrieve a single user
exports.findOne = (req, res) => {
  res.json(req.user);
};

// update a user
exports.update = (req, res) => {
  res.json({ message: `Updating user ${req.params.userId}` });
};

// delete a user
exports.delete = (req, res) => {
  res.json({ message: `Deleting user ${req.params.userId}` });
};

exports.findUser = async (req, res, next) => {
  let user;
  try {
    user = await User.findById(req.params.userId, '-password');
    if (user == null) {
      return res.status(404).json({ message: `Cannot find user ${req.params.userId}` });
    }
  } catch (err) {
    return res.status(500).json({ message: `Cannot find user`, error: err });
  }
  req.user = user;
  next();
}
