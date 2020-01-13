import Category from '../models/transactionCategory.model';

// create new transaction category
exports.create = async (req, res) => {
  try {
    let category = new Category(req.body);
    let result = await category.save();
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ message: `Unable to create category`, error: err });
  }
};

// retrieve all transaction categories
exports.findAll = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch {
    res.status(500).json({ message: `Unable to find categories`, error: err });
  }
};

// retrieve a single transaction category
exports.findOne = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (category == null) {
      return res.status(404).json({ message: `Category does not exist` });
    }
    res.json(category);
  } catch (err) {
    return res.status(500).json({ message: `Cannot find category`, error: err });
  }
};

// update a transaction category
exports.update = (req, res) => {
  res.json({ message: `Updating category ${req.params.id}` });
};

// delete a transation category
exports.delete = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (category == null) {
      return res.status(404).json({ message: `Unable to delete, could not find the category` });
    }
    res.json({ message: `Category successfully deleted` });
  } catch (err) {
    return res.status(500).json({ message: `Cannot delete category`, error: err });
  }
};
