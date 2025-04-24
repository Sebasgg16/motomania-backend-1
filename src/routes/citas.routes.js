const express = require( 'express' );

const { createCitas, getCitas, getCitasById, deleteCitasById, updateCitasByIdPatch } = require('../controllers/citas.controller');

const validateId = require('../middlewares/validate-id.middleware');

const router = express.Router();

router.post( '/', createCitas );


router.get( '/', getCitas );


router.get( '/:id', validateId, getCitasById );


router.delete( '/:id', validateId, deleteCitasById );


router.patch( '/:id', validateId, updateCitasByIdPatch );


module.exports = router;