import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'TransactionCategory', required: true },
  startDate: Date,
  frequency: String // TODO: needs to be an enum or something? (1: daily, 2: monthly, 3: yearly, etc.)
}, {
  timestamps: true,
});

const Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction;
