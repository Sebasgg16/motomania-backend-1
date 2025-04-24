const CitaModel = require("../models/citas.models");

async function insertCita( newcita ) {
    return await CitaModel.create( newcita
     );    
}

const obtenerCita = async( ) => {
    return await CitaModel.find( );
}

const obtenerCitaPorId = async(id) => {
    return await CitaModel.findOne ({_id:id});
}

const eliminarCitaPorId = async(id) => {
    return await CitaModel.findOneAndDelete ({_id:id});
}
const actualizarCitaPorId = async(id, inputData) => {
    return await CitaModel.findByIdAndUpdate (id,inputData,{new:true});
}


module.exports = {
    insertCita,
    obtenerCita,
    obtenerCitaPorId,
    eliminarCitaPorId,
    actualizarCitaPorId
};