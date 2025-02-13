const Digit = require('../Models/digitModel');


exports.getNumber = async (req, res) => {

    try {
       const digit = await Digit.findOne({ name: "digit" });

        if (digit) {
            return res.status(200).json({ number: digit.currentOtp });
        }

        return res.status(400).json({error: "Not Found"})
    } catch (err) {
        console.log("error in random number generation error => ", err.message);
        return res.status(500).json({ error: err.message });
    }

}