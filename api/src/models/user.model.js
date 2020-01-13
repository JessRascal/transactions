import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  bankAccounts: [{
    name: { type: String, required: true },
    accountType: { type: mongoose.Schema.Types.ObjectId, ref: 'BankAccountType', required: true },
    balance: { type: Number, default: 0.00 },
    transactions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' }],
  }],
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

export default User;
