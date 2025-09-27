const express = require('express');
require('dotenv').config();
const film3Routes = require('./routes/film3Routes');

const app = express();
const PORT = process.env.PORT || 4003;

app.use(express.json());
app.use('/api/film3', film3Routes);

app.listen(PORT, () => {
    console.log(`Server berjalan pada localhost:${PORT}`);
});