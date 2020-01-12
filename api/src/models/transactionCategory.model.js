import mongoose from 'mongoose';

const transactionCategorySchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
}, {
  timestamps: true,
});

const TransactionCategory = mongoose.model('TransactionCategory', transactionCategorySchema);

export default TransactionCategory;
