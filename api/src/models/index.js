import mongoose from 'mongoose';
import User from './user.model';

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DB_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      });
    // listen for errors
    mongoose.connection.on('error', console.error);
    console.log(`Connected to the database`);
  }
  catch (e) {
    console.log(`Unable to connect to the database. Error: ${e}`);
    process.exit();
  }
};

const models = { User };

export { connectDb };

export default models;
