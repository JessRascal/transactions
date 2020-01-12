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
  res.json(res.user);
};

// update a user
exports.update = (req, res) => {
  res.json({ message: `Updating user ${req.params.id}` });
};

// delete a user
exports.delete = (req, res) => {
  res.json({ message: `Deleting user ${req.params.id}` });
};

exports.findUser = async (req, res, next) => {
  console.log(`finding user: ${req.params.userId}`); // TODO: REMOVE
  let user;
  try {
    user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: `Cannot find user ${req.params.id}` });
    }
  } catch (err) {
    console.log(`err: ${err}`); // TODO: REMOVE
    return res.status(500).json({ message: `Cannot find user`, error: err });
  }
  res.user = user;
  next();
}
