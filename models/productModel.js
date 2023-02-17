const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A product must have a name'],
        minLength: 5,
    },

    slug: String,

    description: {
        type: String,
        required: [true, 'A product must have a description'],
        minLength: 10,
    },

    properties: [
        {
            key: { type: String, required: true },
            value: { type: String, required: true },
        },
    ],

    imageCover: {
        type: String,
        // required: [true, 'A product must have an image cover'],
    },

    images: [String],
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
