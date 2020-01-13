import mongoose from 'mongoose';

const bankAccountTypeSchema = new mongoose.Schema({
  name: { type: String, required: true, index: { unique: true } },
  defaultDebit: { type: Boolean, required: true },
}, {
  timestamps: true,
});

const BankAccountType = mongoose.model('BankAccountType', bankAccountTypeSchema);

export default BankAccountType;
