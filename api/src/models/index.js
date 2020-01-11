import mongoose from 'mongoose';
import User from './user.model';

const connectDb = () => {
  // eslint-disable-next-line max-len
  return mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
};

const models = { User };

export { connectDb };

export default models;
