const express = require('express')
const {authenticateUser} = require('../middleware/authenticate')
const {signUpValidator} = require('../middleware/signUpValidator')
const {loginValidator} = require('../middleware/loginValidator')
const { getUserDetails, signup, login } = require('../controller/userController')
const router = express.Router()

router.get("/", authenticateUser , getUserDetails)
router.post("/signup", signUpValidator, signup)
router.post("/login", loginValidator, login)

module.exports = router