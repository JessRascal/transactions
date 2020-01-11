import User from '../models/user.model';

// create new user
exports.create = async (req, res) => {
  // res.json({ message: `Creating user` });
  try {
    let user = new User(req.body);
    let result = await user.save();
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: `Unable to create user - ${err}` });
  }
};

// retrieve a single user
exports.findOne = (req, res) => {
  res.json({ message: `Getting user ${req.params.id}` });
};

// update a user
exports.update = (req, res) => {
  res.json({ message: `Updating user ${req.params.id}` });
};

// delete a user
exports.delete = (req, res) => {
  res.json({ message: `Deleting user ${req.params.id}` });
};
