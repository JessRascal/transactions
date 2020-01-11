import mongoose from 'mongoose';

const bankAccountSchema = new mongoose.Schema({
  name: String,
  typeId: Number, // reference
  balance: Number,
  user: Number, // reference
  createdDate: { type: Date, default: Date.now, },
  transactions: { type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' },
});

const BankAccount = mongoose.model('BankAccount', bankAccountSchema);

export default BankAccount;
