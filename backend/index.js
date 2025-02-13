const express = require('express');
const dotenv = require('dotenv');
const { createServer } = require("http");
const { Server } = require("socket.io");
const { connectDB } = require('./config/dbConnect');
const blog = require('./Route/blog');
const { generateFirstOTP } = require('./controllers/utils/FirstOtp');
const Digit = require('./Models/digitModel');

dotenv.config();

const app = express();
const server = createServer(app);
const io = new Server(server);
const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send('|| Shree Ganeshya Namaha ||');
});

app.use('/api/v1', blog);

io.on("connection", async (socket) => {
    console.log("connected with id ", socket.id);
    const digit = await Digit.findOne({ name: "digit" });

    if (digit) {
        socket.emit('Number', { number: digit.currentOtp });
    }
    socket.emit('Number', { number: 12*'0' });
});

io.on("frontendMessage", async (number) => {
    const digit = await Digit.findOne({ name: "digit" });
    digit.currentOtp = number;
})

app.listen(PORT, () => {
    connectDB();
    console.log(`Server started on port ${PORT}`);
    // generateOTP();
    generateFirstOTP();
    setInterval(generateFirstOTP, 1 * 1000);
});