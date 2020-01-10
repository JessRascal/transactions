import mongoose from 'mongoose';

const bankAccountTypeSchema = new mongoose.Schema({
  name: String,
  defaultDebit: Boolean,
});

const BankAccountType = mongoose.model('BankAccountType', bankAccountTypeSchema);

export default BankAccountType;
