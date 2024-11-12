
const express = require('express')
const userController = require('../controllers/userController')
const jwtMiddleware = require('../middleware/jwtMiddleware')


const router = new express.Router()


// register : http://localhost:3000/register
router.post('/register',userController.registerController)

// login : http://localhost:3000/login
router.post('/login',userController.loginController)

// all-users : http://localhost:3000/all-users
router.get('/all-users',jwtMiddleware, userController.getAllUserListController)

// users/:id : http://localhost:3000/users/:id
router.get('/users/:id',jwtMiddleware, userController.getAllUserListController)

module.exports = router