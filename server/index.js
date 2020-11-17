import 'dotenv/config';
import cors from 'cors';
import express from 'express';

import routes from './routes';
 
const app = express();
 
app.use(cors());
 
app.use('/cards', routes.cards);
app.use('/images', routes.images);
 
app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);