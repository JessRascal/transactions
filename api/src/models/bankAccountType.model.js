import mongoose from 'mongoose';

const bankAccountTypeSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  defaultDebit: Boolean,
}, {
  timestamps: true,
});

const BankAccountType = mongoose.model('BankAccountType', bankAccountTypeSchema);

export default BankAccountType;
