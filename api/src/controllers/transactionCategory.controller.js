import Category from '../models/transactionCategory.model';

// create new transaction category
exports.create = async (req, res) => {
  try {
    let category = new Category(req.body);
    let result = await category.save();
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: `Unable to create transaction category - ${err}` });
  }
};

// retrieve all transaction categories
exports.findAll = (req, res) => {
  res.json({ message: `Getting all transaction categories` });
};

// retrieve a single transaction category
exports.findOne = (req, res) => {
  res.json({ message: `Getting transaction category ${req.params.id}` });
};

// update a transaction category
exports.update = (req, res) => {
  res.json({ message: `Updating transaction category ${req.params.id}` });
};

// delete a transation category
exports.delete = (req, res) => {
  res.json({ message: `Deleting transaction category ${req.params.id}` });
};
