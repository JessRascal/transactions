import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
  bankAccounts: [{
    name: String,
    accountType: { type: mongoose.Schema.Types.ObjectId, ref: 'BankAccountType' },
    balance: Number,
    // createdDate: { type: Date, default: Date.now, }, // TODO: remove if timestamp added to embedded
    transactions: { type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' },
  }],
}, {
  timestamps: true,
});

// userSchema.statics.findByLogin = async function (login) {
//   let user = await this.findOne({
//     username: login,
//   });

//   if (!user) {
//     user = await this.findOne({ email: login });
//   }

//   return user;
// }

const User = mongoose.model('User', userSchema);

export default User;
