const mongoose = require( "mongoose" );

const serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String
    },
    
    urlimage:{
        type: String
    },
    // duration:{
    //     type: Number,
    //     required: true
    // },
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: "user"
    },
    mechanicId: {
        type: mongoose.Schema.ObjectId,
        ref: "user"
    }
},{
    timestamps: true,
    versionKey: false
})

const serviceModel = mongoose.model(
    "service",
    serviceSchema
);

module.exports = serviceModel;