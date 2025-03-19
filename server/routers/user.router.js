const express = require("express")
const Router = express.Router() 
const {register ,getAllUsers,login }=require("../controllers/user.controller")




Router.post("/register", register)
Router.post("/login", login)
Router.get("/getall",getAllUsers)

module.exports = Router 