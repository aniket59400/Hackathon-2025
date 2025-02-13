const express = require('express');
const dotenv = require('dotenv');
const { connectDB } = require('./config/dbConnect');
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send('|| Shree Ganeshya Namaha ||');
});

app.listen(PORT, () => {
    connectDB();
    console.log(`Server started on port ${PORT}`);
});