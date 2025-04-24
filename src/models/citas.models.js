const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const CitaSChema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description: {
        type: String
    },
    day:{
        type: String
    },
    hour:{
        type: String
    }
}, {
    timestamps: true,
    versionKey: false
});



const CitaModel = mongoose.model(
    "citas",
    CitaSChema
);

module.exports = CitaModel;