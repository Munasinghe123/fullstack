const express= require('express')
const router = express.Router()

//imported model
const user= require('../model/UserModel')

//imported controller
const userController = require('../controllers/UserController')

// getting users
router.get("/", userController.getAllUsers)

//getting users by id
router.get("/:id", userController.getById)

//inserting users
router.post("/", userController.addUsers)

//updating user
router.put("/:id", userController.updateUser)

//delete user
router.delete("/:id", userController.deleteUser)

//exports
module.exports=router;
