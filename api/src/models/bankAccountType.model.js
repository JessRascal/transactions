import mongoose from 'mongoose';

const bankAccountTypeSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  defaultDebit: { type: Boolean, required: true },
}, {
  timestamps: true,
});

const BankAccountType = mongoose.model('BankAccountType', bankAccountTypeSchema);

export default BankAccountType;
