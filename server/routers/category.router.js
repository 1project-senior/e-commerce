const express = require("express")
const Router = express.Router()
const {getAllcategory,addcategory}=require("../controllers/category.controler")

Router.get("/getall",getAllcategory)
Router.post("/add",addcategory)

module.exports = Router 