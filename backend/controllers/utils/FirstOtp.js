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
    
        const digit = await Digit.create({
            name: "digit",
            currentOtp: otp,
            history: [...history,otp]
        })
    
        await digit.save();
    
        console.log("otp: ",otp);
    } catch (err) {
        console.log("error in random number generation error => ", err.message);
    }

}