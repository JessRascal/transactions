import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  amount: Number,
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'TransactionCategory' },
}, {
  timestamps: true,
});

const Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction;
