const router = require(express.Router())
const {getProducts, createProduct} = require("../models/productModel")

//gets all products
router("/products", getProducts)

//create products
router("/createProducts", createProduct)



