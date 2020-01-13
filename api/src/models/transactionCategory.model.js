import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const transactionCategorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
}, {
  timestamps: true,
});

transactionCategorySchema.plugin(uniqueValidator);

const TransactionCategory = mongoose.model('TransactionCategory', transactionCategorySchema);

export default TransactionCategory;
