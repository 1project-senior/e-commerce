const express = require("express")
const Router = express.Router()
const {getAllproducts,getOne,getByCtagory, addProduct,deleteProduct,updateProduct} =require("../controllers/products.contorlle")


Router.get("/getall",getAllproducts)
Router.get("/:name",getOne)
Router.get("/cat/:id",getByCtagory)
Router.post("/add",addProduct)
Router.delete("/:id",deleteProduct)
Router.put("/change/:id",updateProduct)


module.exports = Router 