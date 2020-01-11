import Type from '../models/bankAccountType.model';

// create new transaction
exports.create = async (req, res) => {
  // res.json({ message: `Creating bank account type` });
  try {
    let type = new Type(req.body);
    let result = await type.save();
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: `Unable to create bank account type - ${err}` });
  }
};

// retrieve all transactions
exports.findAll = (req, res) => {
  res.json({ message: `Getting all bank account types` });
};

// retrieve a single transaction
exports.findOne = (req, res) => {
  res.json({ message: `Getting bank account type ${req.params.id}` });
};

// update a transaction
exports.update = (req, res) => {
  res.json({ message: `Updating bank account type ${req.params.id}` });
};

// delete a transation
exports.delete = (req, res) => {
  res.json({ message: `Deleting bank account type ${req.params.id}` });
};
