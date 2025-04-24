const mongoose = require("mongoose");
const { dbGetUserById, dbGetUser, dbInsertUser, dbDeleteUserById, dbUpdateUserById } = require("../services/user.service");


async function getUsers(req, res) {

    try {
        const data = await dbGetUser();

        res.json({
            ok: true,
            data: data
        });
    }
    catch (error) {
        console.error(error);
        res.json({
            ok: false,
            msg: 'Ha ocurrido una excepcion al obtener todos los datos'
        });
    }

}

async function createUser(req, res) {
    const inputData = req.body
    try {
        const data = await dbInsertUser(inputData)
        res.json({
            ok: true,
            data: data
        })
    } catch (error) {
        console.error(error);
        res.json({
            ok: false,
            msg: 'Ha ocurrido una excepcion al registrar los datos'
        });
    }
}

async function getUserById(req, res) {
    const id = req.params.id;

    try {
        const data = await dbGetUserById(id);

        res.json({
            ok: true,
            data: data
        });
    }
    catch (error) {
        console.error(error);
        res.json({
            ok: false,
            msg: 'Ha ocurrido una excepcion al obtener los datos por ID'
        });
    }

}

async function deleteUserById(req, res) {
    const id = req.params.id;

    try {
        const data = await dbDeleteUserById(id);

        res.json({
            ok: true,
            data: data
        });
    }
    catch (error) {
        console.error(error);
        res.json({
            ok: false,
            msg: 'Ha ocurrido una excepcion al eliminar los datos por ID'
        });
    }

}


async function updateUserById(req, res) {
    const id = req.params.id;
    const inputData = req.body;

    try {
        const data = await dbUpdateUserById(id, inputData);

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

module.exports = {
    createUser,
    getUserById,
    deleteUserById,
    updateUserById,
    getUsers
};