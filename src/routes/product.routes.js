const express = require( 'express' );
const { getProducts, createProduct, getProductById, deleteProductById, updateProductByIdPatch } = require('../controllers/product.controller');
const validateId = require('../middlewares/validate-id.middleware');

const router = express.Router();

// http://localhost:<port>/api/products/
router.get( '/', getProducts );

// http://localhost:<port>/api/products/
router.post( '/', createProduct);

// http://localhost:<port>/api/products/<product-id>
// req.params.pedro = 7654ftgyhuji
router.get( '/:id', validateId, getProductById );

// http://localhost:<port>/api/products/<product-id>
router.delete( '/:id', validateId, deleteProductById );

// http://localhost:<port>/api/products/<product-id>
router.patch( '/:id', validateId, updateProductByIdPatch );


module.exports = router;