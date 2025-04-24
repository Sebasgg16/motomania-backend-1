const categoryModel = require("../models/category.model");
const { obtenerlacategory, insertcategory, eliminarCategoriaPorId } = require("../services/category.service");

async function getcategory( req, res ) {

    try { 
    const data = await obtenerlacategory();

    res.json({
        ok: true,
        data: data
    });
} catch (error) {
    console.error(error)
    res.json ({
        ok: false,
        msg: "Ha ocurrido un error en los datos"
    })
}
}

async function createcategory( req, res ) {
    const inputData = req.body;

try { 
    const data = await insertcategory( inputData );

    res.json({
        ok: true,
        data: data
    });
} catch (error) {
    console.error(error);
    res.json({
        ok: false,
        msg: "Ha ocurrido una excepcion al registrar los datos"
        })
    }
}

async function getcategoryById( req, res ) {
    const id = req.params.id;

try {
    const data = await obtenerLacategoryPorId (id);
    res.json({
        ok: true,
        data: data
    });
} catch (error) {
    console.error(error)
    res.json ({
        ok: false,
        msg: "Ha ocurrido un error en los datos del id"
        });
    }
} 

async function deletecategoryById( req, res ) {
    const id = req.params.id;
    try {
        const data = await eliminarCategoriaPorId (id)
        res.json({
            ok:true,
            data: data
        })
    } catch (error) {
        console.error(error)
        res.json ({
            ok: false,
            msg: "Error al eliminar la id"
    });
}
}

function updatecategoryByIdPut( req, res ) {
    const id = req.params.id;
    res.json({
        ok: true,
        msg: `Actualiza todos los recursos de un producto por ID: ${ id }`
    });
}

async function updatecategoryByIdPatch( req, res ) {
    const id = req.params.id;
    const imputdata = req.body
    try { 
    const data = await categoryModel.findByIdAndUpdate(id,imputdata,{new:true})
    res.json({
        ok: true,
        data: data
    });
    } catch (error) {
        console.error(error)
        res.json({
            ok: false,
            msg: "Error al actualizar el objeto"
        })
    }
}

// module.exports = get+Category;  // Export Default
module.exports = {
    getcategory,
    createcategory,
    getcategoryById,
    deletecategoryById,
    updatecategoryByIdPut,
    updatecategoryByIdPatch
}
