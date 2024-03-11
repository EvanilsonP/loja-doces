const mongoose = require('mongoose');

const candySchema = new mongoose.Schema({

    name: {
        type: String,
        required: 'This field is required.'
    },

    description: {
        type: String,
        required: 'This field is required.'
    },

    image: {
        type: String,
        required: 'This field is required.'
    },

    category: {
        enum: ['Brownie', 'Bolo', 'Cone', 'Brigadeiro', 'Ovo'];
        required: 'This field is required.'
    }
});

module.exports = mongoose.model('Candy', candySchema);