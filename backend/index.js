const express = require('express');
const dotenv = require('dotenv');
const { createServer } = require("http");
const { Server } = require("socket.io");
const { connectDB } = require('./config/dbConnect');
const blog = require('./Route/blog');
const { generateFirstOTP } = require('./controllers/utils/FirstOtp');

dotenv.config();

const app = express();
const io = new Server(httpServer, { /* options */ });
const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send('|| Shree Ganeshya Namaha ||');
});

app.use('/api/v1', blog);

io.on("connection", (socket) => {
    // ...
});

app.listen(PORT, () => {
    connectDB();
    console.log(`Server started on port ${PORT}`);
    // generateOTP();
    generateFirstOTP();
    setInterval(generateFirstOTP, 1 * 1000);
});