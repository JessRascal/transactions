import mongoose from 'mongoose';

const transactionCategorySchema = new mongoose.Schema({
  name: String,
});

const TransactionCategory = mongoose.model('TransactionCategory', transactionCategorySchema);

export default TransactionCategory;
