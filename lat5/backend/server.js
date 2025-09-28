const express = require('express');
const cors = require('cors');
require('dotenv').config;
const film1Routes = require('./routes/film1Routes');

const app = express();
const PORT = process.env.PORT || 4002;

app.use(express.json());
app.use(cors());
app.use('/api/films', film1Routes);

app.listen(PORT, () => {
    console.log(`Server berjalan pada localhost:${PORT}`);
})