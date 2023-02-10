
const productModel = require("../models/productModel")

//get products
const getProducts = async function(req,res){
    try{
        const products = await productModel.find()

        if(products.length==0){
            res.status(404).send({status:true, message:"ServerSays- no data found.."})
        }

        res.status(200).send({status:true, message: "success", data:products})

    }
    catch(err){
        res.status(500).send({status:true, message: err.message})
    }
}


//create product
const createProduct = async function(req,res){
    try{

        const createdData = await productModel.create(req.body)

        res.status(201).send({status:true, message: "success", data:createdData})

    }
    catch(err){
        res.status(500).send({status:true, message: err.message})
    }
}

module.exports = {getProducts, createProduct}