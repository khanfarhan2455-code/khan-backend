import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './db.js';
import router from './routes.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

connectDB(); // DB Connect

app.use('/api', router); // Routes

app.get('/', (req, res) => res.send('Server is running!'));

export default app;
