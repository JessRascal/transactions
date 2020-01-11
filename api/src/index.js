import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import routes from './routes';

import { connectDb } from './models';

const app = express();

// app-wide middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/v1', routes);

// connect to db then start app
connectDb().then(async () => {
  app.listen(process.env.PORT || 3001, () => console.log(`API listening on port ${process.env.PORT}`));
});
