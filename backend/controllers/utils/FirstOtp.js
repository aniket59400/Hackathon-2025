const otpGenerator = require('otp-generator');
const Digit = require('../../Models/digitModel');

exports.generateFirstOTP = async () => {
    try {
        const otp = otpGenerator.generate(12, { 
            upperCaseAlphabets: false, 
            specialChars: false, 
            lowerCaseAlphabets: false, 
            digits: true 
        });

        // Find existing digit document or create new one
        let digit = await Digit.findOne({ name: "digit" });
        
        if (digit) {
            // If document exists, update it
            digit.currentOtp = otp;
            digit.history = digit.history ? [...digit.history, otp] : [otp];
            await digit.save();
        } else {
            // If no document exists, create new one
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