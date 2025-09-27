const express = require('express');
const film1Routes = require('./routes/rfilm1Routes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.json());
app.use('/api/films', film1Routes);

app.listen(PORT, () => {
    console.log(`Server berjalan pada localhost:${PORT}`);
})