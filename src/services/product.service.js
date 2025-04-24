const ProductModel = require("../models/product.model");

async function insertProduct( newProduct ) {
    /** Consulta a la BD (Responsabilidad del Servicio) */
    return await ProductModel.create( newProduct
     );    // Mongoose registra en MongoDB
}

const obtenerElProduto = async( ) => {
    return await ProductModel.find({}).populate(['category','userId']);
}

const obtenerElProductoPorId = async(id) => {
    return await ProductModel.findOne ({_id:id});
}

const eliminarProductoPorId = async(id) => {
    return await ProductModel.findOneAndDelete ({_id:id});
}
const actualizarProductoPorId = async(id,imputdata) => {
    return await ProductModel.findByIdAndUpdate (id,imputdata,{new:true});
}


module.exports = {
    insertProduct,
    obtenerElProduto,
    obtenerElProductoPorId,
    eliminarProductoPorId,
    actualizarProductoPorId
};