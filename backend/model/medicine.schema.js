const mongoose = require('mongoose');

const medicine = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    potency: {
        type: String,
        required: true
    },
    ingredients: {
        type: String,
        required: true
    },
    price : {
        type: Number,
        required: true
    },
    quantity : {
        type: Number,
        required: true
    },
    producer : {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Medicine', medicine);