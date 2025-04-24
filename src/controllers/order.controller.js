const { obtenerlaOrder, insertOrder, obtenerOrderPorId, eliminarOrderPorId, actualizarOrderPorId } = require("../services/order.services");

async function getOrder( req, res ) {

    try { 
    const data = await obtenerlaOrder();

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

async function createOrder( req, res ) {
    const inputData = req.body;

try { 
    const data = await insertOrder( inputData );

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

async function getOrderById( req, res ) {
    const id = req.params.id;

try {
    const data = await obtenerOrderPorId (id);
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

async function deleteOrderById( req, res ) {
    const id = req.params.id;
    try {
        const data = await eliminarOrderPorId (id)
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

async function updateOrderByIdPatch( req, res ) {
    const id = req.params.id;
    const imputdata = req.body
    try { 
    const data = await actualizarOrderPorId( id, imputdata );
    res.json({
        ok: true,
        data: data
    });
    } catch (error) {
        console.error(error)
        res.json({
            ok: false,
            msg: "Error al actualizar orden"
        })
    }
}

// module.exports = get+Category;  // Export Default
module.exports = {
    getOrder,
    createOrder,
    getOrderById,
    deleteOrderById,
    updateOrderByIdPatch
}
