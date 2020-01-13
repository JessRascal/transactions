import mongoose from 'mongoose';

const transactionCategorySchema = new mongoose.Schema({
  name: { type: String, required: true, index: { unique: true } },
}, {
  timestamps: true,
});

const TransactionCategory = mongoose.model('TransactionCategory', transactionCategorySchema);

export default TransactionCategory;
