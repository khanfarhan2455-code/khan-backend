import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './db.js'; // db.js se import
import router from './routes.js';   // routes.js se import

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Database connection
connectDB();

// Saare routes /api se start honge
app.use('/api', router);

app.get('/', (req, res) => res.send('Server is running!'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
