const express = require("express")
const Router = express.Router()
const {getAllproducts,getOne,getByCtagory, addProduct,deleteProduct,updateProduct} =require("../controllers/products.contorlle")


Router.get("/getall",getAllproducts)
Router.get("/:id",getOne)
Router.get("/cat/:id",getByCtagory)
Router.post("/added",addProduct)
Router.delete("/:id",deleteProduct)
Router.put("/change/:id",updateProduct)


module.exports = Router 