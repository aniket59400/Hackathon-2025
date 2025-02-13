const express = require('express');
const dotenv = require('dotenv');
const { connectDB } = require('./config/dbConnect');
const generateOTP = require('./controllers/utils/ChangeNumber');
const blog = require('./Route/blog');

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send('|| Shree Ganeshya Namaha ||');
});

app.use('/api/v1', blog);

app.listen(PORT, () => {
    connectDB();
    setTimeout(generateOTP(), 15*60*1000);
    console.log(`Server started on port ${PORT}`);
});