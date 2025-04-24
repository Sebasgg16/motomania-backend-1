const orderModel = require("../models/order.model");

async function insertOrder( neworder ) {
    /** Consulta a la BD (Responsabilidad del Servicio) */
    return await orderModel.create( neworder
     );    // Mongoose registra en MongoDB
}

const obtenerlaOrder = async( ) => {
    return await orderModel.find( );
}

const obtenerOrderPorId = async(id) => {
    return await orderModel.findOne ({_id:id});
}

const eliminarOrderPorId = async(id) => {
    return await orderModel.findOneAndDelete ({_id:id});
}
const actualizarOrderPorId = async(id) => {
    return await orderModel.findByIdAndUpdate (id,imputdata,{new:true});
}


module.exports = {
    insertOrder,
    obtenerlaOrder,
    obtenerOrderPorId,
    eliminarOrderPorId,
    actualizarOrderPorId
};