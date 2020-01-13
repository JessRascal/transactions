import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  bankAccounts: [{
    name: { type: String, required: true }, // TODO: setting as unique stops being able to create multiple users without accounts
    accountType: { type: mongoose.Schema.Types.ObjectId, ref: 'BankAccountType', required: true },
    balance: { type: Number, default: 0.00 },
    transactions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' }],
  }],
}, {
  timestamps: true,
});

userSchema.plugin(uniqueValidator);

const User = mongoose.model('User', userSchema);

export default User;
