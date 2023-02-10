const { default: mongoose } = require("mongoose");


const productSchema = new mongoose.Schema({
    itemName: {Type:String, required:true},
    itemRate: {Type:Number, required:true}
})


module.exports = mongoose.model("product",productSchema)