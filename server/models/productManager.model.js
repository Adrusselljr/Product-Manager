const mongoose = require('mongoose')

const ProductManagerSchema = new mongoose.Schema({

    title: { 
        type: String 
    },

    price: { 
        type: Number
    },

    description: {
        type: String
    }

}, { timestamps: true })

const Product = mongoose.model('Product', ProductManagerSchema)
module.exports = Product