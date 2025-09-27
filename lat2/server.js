const express = require('express');
const film2Routes = require('./routes/film2Routes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4001;

app.use(express.json());
app.use('/api/film2', film2Routes);

app.listen(PORT, () => {
    console.log(`Server Berjalan di localhost:${PORT}`);
});