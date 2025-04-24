const express = require( 'express' );
const { createservice, getservice, updateserviceById, getserviceById, deleteserviceById, updateserviceByIdPatch } = require('../controllers/services.controller');
const validateId = require('../middlewares/validate-id.middleware');

const router = express.Router();

router.post( '/', createservice );


router.get( '/', getservice );


router.get( '/:id', validateId, getserviceById );


router.delete( '/:id', validateId, deleteserviceById );


router.patch( '/:id', validateId, updateserviceById );


module.exports = router;