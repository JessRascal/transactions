import mongoose from 'mongoose';

const transactionCategorySchema = new mongoose.Schema({
  name: { type: String, unique: true },
}, {
  timestamps: true,
});

const TransactionCategory = mongoose.model('TransactionCategory', transactionCategorySchema);

export default TransactionCategory;
