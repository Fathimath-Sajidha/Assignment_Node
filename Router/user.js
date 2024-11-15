const express=require('express')
const { getAllUsers, getParticularUser, addUser, updateUser } = require('../Controllers/userController')
const router=express.Router()
router.get('/',getAllUsers)
router.get('/:id',getParticularUser)
router.post('/add',addUser)
router.put('/:id',updateUser)

module.exports=router 