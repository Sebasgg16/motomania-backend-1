const express = require( 'express' );

const { createOrder, getOrder, getOrderById, deleteOrderById, updateOrderByIdPatch  } = require('../controllers/order.controller');

const validateId = require('../middlewares/validate-id.middleware');


const router = express.Router();

router.post( '/', createOrder );


router.get( '/', getOrder );


router.get( '/:id', validateId, getOrderById );


router.delete( '/:id', validateId, deleteOrderById );


router.patch( '/:id', validateId, updateOrderByIdPatch );


module.exports = router;