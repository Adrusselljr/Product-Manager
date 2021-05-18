const ProductManagerController = require('../controllers/productManager.controller')

module.exports = function(app) {
    app.get('/api', ProductManagerController.index)
    app.post('/api/products', ProductManagerController.createProduct)
}