const mongoose = require ('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    description: {
        type: String
    },
    role: {
        type: String,
        enum: [ "mecanico", "cliente", "admin" ],
        default: "cliente"
    }
},{
    timestamps: true,
    versionKey: false
})

const UserModel= mongoose.model(
    'user',
    UserSchema
)

module.exports = UserModel