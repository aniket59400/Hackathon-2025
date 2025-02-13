const otpGenerator = require('otp-generator');
const Digit = require('../../Models/digitModel');
let io;

exports.setIO = (socketIO) => {
    io = socketIO;
};

exports.generateFirstOTP = async () => {
    try {
        const otp = otpGenerator.generate(12, {
            upperCaseAlphabets: false,
            specialChars: false,
            lowerCaseAlphabets: false,
            digits: true
        });

        let digit = await Digit.findOne({ name: "digit" });

        if (digit) {
            digit.currentOtp = otp;
            digit.history = digit.history ? [...digit.history, otp] : [otp];
            await digit.save();
            if (io) {
                io.emit('Number', { number: otp });
            }
        } else {
            digit = await Digit.create({
                name: "digit",
                currentOtp: otp,
                history: [otp]
            });
        }

        console.log("otp: ", otp);
        return otp;
    } catch (err) {
        console.error("Error in OTP generation: ", err.message);
        throw err;
    }
}