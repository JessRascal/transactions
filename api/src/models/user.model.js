import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const bankAccountSchema = new mongoose.Schema({
  name: { type: String, required: true },
  accountType: { type: mongoose.Schema.Types.ObjectId, ref: 'BankAccountType', required: true },
  balance: { type: Number, default: 0.00 },
  transactions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' }],
});

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, uniqueCaseInsensitive: true },
  password: { type: String, required: true, select: false },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  bankAccounts: [bankAccountSchema],
}, {
  timestamps: true,
});

userSchema.plugin(uniqueValidator, { message: '{PATH} already in use' });

const User = mongoose.model('User', userSchema);

export default User;
