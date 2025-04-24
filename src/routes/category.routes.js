const express = require( 'express' );
const { getcategory, createcategory, getcategoryById, deletecategoryById, updatecategoryByIdPut, updatecategoryByIdPatch } = require('../controllers/category.controller');
const validateId = require('../middlewares/validate-id.middleware');

const router = express.Router();

router.post( '/', createcategory );


router.get( '/', getcategory );


router.get( '/:id', validateId, getcategoryById );


router.delete( '/:id', validateId, deletecategoryById );


router.put( '/:id', validateId, updatecategoryByIdPut );


router.patch( '/:id', validateId, updatecategoryByIdPatch
 );


module.exports = router;