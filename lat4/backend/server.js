const express = require('express');
const cors =  require('cors');
require('dotenv').config();
const filmRoutes = require('./routes/filmRoutes');

const app = express();
const PORT = process.env.PORT || 4001;

app.use(express.json());
app.use(cors())
app.use('/api/films', filmRoutes);

app.listen(PORT, () => {
    console.log(`Server berjalan pada localhost:${PORT}`)
});