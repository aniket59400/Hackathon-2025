const otpGenerator = require('otp-generator');

exports.generateOTP = async () => {
    const otp = otpGenerator.generate(12, { 
        upperCaseAlphabets: false, 
        specialChars: false, 
        lowerCaseAlphabets: false, 
        digits: true 
    });

    console.log("otp: ",otp);
}