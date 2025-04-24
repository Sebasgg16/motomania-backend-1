const serviceModel = require("../models/services.model");

async function inserteElservice( newservice ) {
    /** Consulta a la BD (Responsabilidad del Servicio) */
    return await serviceModel.create( newservice
     );    // Mongoose registra en MongoDB
}

const obtenerElservice = async( ) => {
    return await serviceModel.find( );
}

const obtenerElservicePorId = async(id) => {
    return await serviceModel.findOne ({_id:id});
}

const eliminarElservicePorId = async(id) => {
    return await serviceModel.findOneAndDelete ({_id:id});
}
const actualizarElservicePorId = async(id) => {
    return await serviceModel.findByIdAndUpdate (id,imputdata,{new:true});
}


module.exports = {
    inserteElservice,
    obtenerElservice,
    obtenerElservicePorId,
    eliminarElservicePorId,
    actualizarElservicePorId
};