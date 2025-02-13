const mongoose = require("mongoose");

const digitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    currentOtp: {
        type: String,
        required: true,
    },
    history: {
        type: Array,
        default: [],
    }
});

module.exports = mongoose.model("Digit", digitSchema);