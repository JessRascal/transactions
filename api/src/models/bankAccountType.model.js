import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const bankAccountTypeSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, uniqueCaseInsensitive: true },
  defaultDebit: { type: Boolean, required: true, default: true },
}, {
  timestamps: true,
});

bankAccountTypeSchema.plugin(uniqueValidator, { message: '{PATH} already in use' });

const BankAccountType = mongoose.model('BankAccountType', bankAccountTypeSchema);

export default BankAccountType;
