const express = require("express")
const Router = express.Router() 
const {register ,getAllUsers,login ,forgetpass,getuserbyid,Resetpass}=require("../controllers/user.controller")




Router.post("/register", register)
Router.post("/login", login)
Router.get("/getall",getAllUsers)
// Router.get("/:id",getuserbyid)
Router.post("/forgotpass",forgetpass)
Router.post("/reset-password/:token",Resetpass)
module.exports = Router 