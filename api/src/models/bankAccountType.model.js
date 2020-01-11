import mongoose from 'mongoose';

const bankAccountTypeSchema = new mongoose.Schema({
  name: String,
  defaultDebit: Boolean,
}, {
  timestamp: true,
});

const BankAccountType = mongoose.model('BankAccountType', bankAccountTypeSchema);

export default BankAccountType;
