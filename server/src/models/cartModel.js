const { default: mongoose } = require("mongoose");


const CartSchema = new mongoose.Schema({
    name: {Type:String, required:true},
    cartItems: []
})

module.exports = mongoose.model("cart",CartSchema)