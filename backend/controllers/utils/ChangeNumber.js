const otpGenerator = require('otp-generator');
const Digit = require('../../Models/digitModel');

exports.generateOTP = async () => {


    try {
        const otp = otpGenerator.generate(12, { 
            upperCaseAlphabets: false, 
            specialChars: false, 
            lowerCaseAlphabets: false, 
            digits: true 
        });
    
        const digit = await Digit.findOneAndUpdate(
            {name: "digit"}, 
            {currentOtp: otp}, 
            {new: true, upsert: true},
            {history: [...history, otp]}
        );
    
        await digit.save();
    
        console.log("otp: ",otp);
    } catch (err) {
        console.log("error in random number generation error => ", err.message);
    }

}