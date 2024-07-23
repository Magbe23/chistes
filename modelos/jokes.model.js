const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    joke: {
        type: String,
        required: true,
    },
    category: String,
    author: String,
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Joke', JokeSchema);
