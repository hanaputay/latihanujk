const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes')
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use('/api/product', productRoutes)

app.listen(PORT, () => {
    console.log(`Server berjalan pada localhost:${PORT}`)
})
