const express = require("express")
const Router = express.Router() 
const {register ,getAllUsers,login ,getuserbyid,forgotPassword,resetPassword}=require("../controllers/user.controller")




Router.post("/register", register)
Router.post("/login", login)
Router.get("/getall",getAllUsers)
Router.get("/:id",getuserbyid)
Router.post("/forgotpassword",forgotPassword)
Router.post("/resetpassword",resetPassword)

module.exports = Router 