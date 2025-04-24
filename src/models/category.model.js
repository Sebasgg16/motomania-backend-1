const mongoose = require( "mongoose" );

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String
    },
     userId: {
            type: mongoose.Schema.ObjectId,
            ref: "user"
    
        }
},{
    timestamps: true,
    versionKey: false
});

const categoryModel = mongoose.model(
    "category",
    categorySchema
);

module.exports = categoryModel;