const router = require('express').Router();
const productController = require('../controllers/productController');

router
    .route('/')
    .get(productController.getAllProducts)
    .post(productController.createOneProduct)
    .delete(productController.deleteAllProducts);

router
    .route('/:productID')
    .get(productController.getOneProduct)
    .delete(productController.deleteOneProduct)
    .patch(productController.updateOneProduct);

module.exports = router;
