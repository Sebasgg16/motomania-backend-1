const mongoose = require("mongoose");

const OrderSChema = new mongoose.Schema({
    customerName: {
        type: String,
        required: true
    },
    customerId: {
        type: String,
        required: true
    },
    items: [],
    totalPrice: {
        type: Number,
        min: 0,
        default: 0
    },
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: "user"
    }
}, {
    timestamps: true,
    versionKey: false
});



const OrderModel = mongoose.model(
    "orders",
    OrderSChema
);

module.exports = OrderModel;