import express from 'express';
import router from './routes/filmRoutes.js';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4003;

app.use(express.json());
app.use(cors());
app.use('/api/films', router);

app.listen(PORT, () => {
    console.log(`Server berjalan pada localhost:${PORT}`);
});