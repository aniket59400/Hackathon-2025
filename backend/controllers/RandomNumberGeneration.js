const otpGenerator = require('otp-generator');


exports.generateOTP2 = async (req, res) => {

    try {
        const otp = otpGenerator.generate(12, { 
            upperCaseAlphabets: false, 
            specialChars: false, 
            lowerCaseAlphabets: false, 
            digits: true 
          });
          
            console.log("otp: ",otp);
            return res.status(200).json({ otp });
    } catch (err) {
        console.log("error in random number generation error => ", err.message);
        return res.status(500).json({ error: err.message });
    }

}