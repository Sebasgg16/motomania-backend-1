const categoryModel = require("../models/category.model");

async function insertcategory( newcategory ) {
    /** Consulta a la BD (Responsabilidad del Servicio) */
    return await categoryModel.create( newcategory
     );    // Mongoose registra en MongoDB
}

const obtenerlacategory = async( ) => {
    return await categoryModel.find( );
}

const obtenerCategoriaPorId = async(id) => {
    return await categoryModel.findOne ({_id:id});
}

const eliminarCategoriaPorId = async(id) => {
    return await categoryModel.findOneAndDelete ({_id:id});
}
const actualizarCategoriaPorId = async(id) => {
    return await categoryModel.findByIdAndUpdate (id,imputdata,{new:true});
}


module.exports = {
    insertcategory,
    obtenerlacategory,
    obtenerCategoriaPorId,
    eliminarCategoriaPorId,
    actualizarCategoriaPorId
};