import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const transactionCategorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, uniqueCaseInsensitive: true },
}, {
  timestamps: true,
});

transactionCategorySchema.plugin(uniqueValidator, { message: '{PATH} already in use' });

const TransactionCategory = mongoose.model('TransactionCategory', transactionCategorySchema);

export default TransactionCategory;
