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

// update a account type
exports.update = (req, res) => {
  res.json({ message: `Updating bank account type ${req.params.id}` });
};

// delete a account type
exports.delete = (req, res) => {
  res.json({ message: `Deleting bank account type ${req.params.id}` });
};
