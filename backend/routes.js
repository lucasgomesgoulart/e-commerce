const { Router } = require('express')
const UserController = require('./api/controllers/UserController')

const router = Router()

router.get('/login', UserController.login)
router.post('/createUser', UserController.createUser)

module.exports = router