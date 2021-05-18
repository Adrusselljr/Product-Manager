const Product = require('../models/productManager.model')

module.exports.index = (req, res) => {
    Product.find()
    .then(data => res.json({results: data}))
    .catch(err => res.json(err.errors))
}

module.exports.createProduct = (req, res) => {
    const { title, price, description } = req.body
    Product.create({
        title,
        price,
        description
    })
    .then(data => res.json({results: data}))
    .catch(err => res.json(err.errors))
}