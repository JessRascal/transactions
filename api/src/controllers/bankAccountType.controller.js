import Type from '../models/bankAccountType.model';

// create new account type
exports.create = async (req, res) => {
  // res.json({ message: `Creating bank account type` });
  try {
    let type = new Type(req.body);
    let result = await type.save();
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ message: `Unable to create account type`, error: err });
  }
};

// retrieve all account types
exports.findAll = async (req, res) => {
  try {
    const types = await Type.find();
    res.json(types);
  } catch {
    res.status(500).json({ message: `Unable to find account types`, error: err });
  }
};

// retrieve a single account type
exports.findOne = async (req, res) => {
  try {
    const type = await Type.findById(req.params.id);
    if (type == null) {
      return res.status(404).json({ message: `Account type does not exist` });
    }
    res.json(type);
  } catch (err) {
    return res.status(500).json({ message: `Cannot find account type`, error: err });
  }
};

// update an account type
exports.update = async (req, res) => {
  try {
    const typeUpdated = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
    if (!typeUpdated) {
      return res.status(404).json({ message: `Could not update account type, it does not exist` });
    }
    res.status(200).json(typeUpdated);
  } catch (err) {
    res.status(500).json({ message: `Unable to update account type`, error: err });
  }
};

// delete an account type
exports.delete = async (req, res) => {
  try {
    const type = await Type.findByIdAndDelete(req.params.id);
    if (type == null) {
      return res.status(404).json({ message: `Unable to delete, could not find the account type` });
    }
    res.json({ message: `Account type successfully deleted` });
  } catch (err) {
    return res.status(500).json({ message: `Cannot delete account type`, error: err });
  }
};
