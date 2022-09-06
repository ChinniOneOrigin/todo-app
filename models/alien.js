const mongoose = require("mongoose");

const alienSchema = new mongoose.Schema({
    // name: { type: String, required: true },
    task: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        // required: true,
        default: false,
    },
});

module.exports = mongoose.model("Alien", alienSchema);