const { insertCita, obtenerCita, obtenerCitaPorId, eliminarCitaPorId, actualizarCitaPorId } = require("../services/citas.service");


async function createCitas( req, res ) {
    const inputData = req.body;

try { 
    const data = await insertCita( inputData );

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

async function getCitas( req, res ) {

    try { 
    const data = await obtenerCita();

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


async function getCitasById( req, res ) {
    const id = req.params.id;

try {
    const data = await obtenerCitaPorId (id);
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

async function deleteCitasById( req, res ) {
    const id = req.params.id;
    try {
        const data = await eliminarCitaPorId (id)
        res.json({
            ok:true,
            data: data
        })
    } catch (error) {
        console.error(error)
        res.json ({
            ok: false,
            msg: "Error al eliminar la cita por id"
    });
}
}

async function updateCitasByIdPatch( req, res ) {
    const id = req.params.id;
    const imputdata = req.body
    try { 
    const data = await actualizarCitaPorId(id,imputdata)
    res.json({
        ok: true,
        data: data
    });
    } catch (error) {
        console.error(error)
        res.json({
            ok: false,
            msg: "Error al actualizar la cita"
        })
    }
}

module.exports = {
    createCitas,
    getCitas,
    getCitasById,
    deleteCitasById,
    updateCitasByIdPatch
}
