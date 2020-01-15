import User from '../models/user.model';

// create new user
exports.create = async (req, res) => {
  try {
    const user = new User(req.body);
    const userNew = await user.save();
    res.status(201).json(userNew);
  } catch (err) {
    res.status(500).json({ message: `Unable to create user`, error: err });
  }
};

// retrieve all users
exports.findAll = async (req, res) => {
  try {
    const users = await User.find();
    if (!users) {
      return res.status(404).json({ message: `No users exist in the system` });
    }
    res.json(users);
  } catch {
    res.status(500).json({ message: `Unable to find users`, error: err });
  }
};

// retrieve a single user
exports.findOne = (req, res) => {
  res.json(req.user);
};

// update a user
exports.update = async (req, res) => {
  try {
    const userUpdated = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
    if (!userUpdated) {
      return res.status(404).json({ message: `Unable to update user, they do not exist` });
    }
    res.status(200).json(userUpdated);
  } catch (err) {
    res.status(500).json({ message: `Unable to update user`, error: err });
  }
};

// delete a user
exports.delete = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: `Unable to delete user, they do not exist` });
    }
    res.json({ message: `User successfully deleted` });
  } catch (err) {
    return res.status(500).json({ message: `Unable to delete user`, error: err });
  }
};
