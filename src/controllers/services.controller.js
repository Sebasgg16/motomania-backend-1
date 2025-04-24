const serviceModel = require("../models/services.model");
const { inserteElservice, obtenerElservice, obtenerElservicePorId, eliminarElservicePorId } = require("../services/services.services");


async function getservice( req, res ) {

    try { 
    const data = await obtenerElservice();

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

async function createservice( req, res ) {
    const inputData = req.body;
    console.log (inputData)

try { 
    const data = await inserteElservice( inputData )

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

async function getserviceById( req, res ) {
    const id = req.params.id;

try {
    const data = await obtenerElservicePorId (id);
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

async function deleteserviceById( req, res ) {
    const id = req.params.id;
    try {
        const data = await eliminarElservicePorId (id)
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


async function updateserviceByIdPatch( req, res ) {
    const id = req.params.id;
    const imputdata = req.body
    try { 
    const data = await serviceModel.findByIdAndUpdate(id,imputdata,{new:true})
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
async function updateserviceById(req, res) {
    const id = req.params.id;
    const inputData = req.body;

    try {
        const data = await dbUpdateServiceById(id, inputData);

        res.json({
            ok: true,
            data: data
        });
    }
    catch (error) {
        console.error(error);
        res.json({
            ok: false,
            msg: 'Ha ocurrido una excepcion al actualizar los datos por ID'
        });
    }

}

// module.exports = get+Category;  // Export Default
module.exports = {
    getservice,
    createservice,
    getserviceById,
    deleteserviceById,
    updateserviceById,
    updateserviceByIdPatch}