const { Router } = require('express')
const UserController = require('./api/controllers/UserController')

const router = Router()

router.post('/login', UserController.login)
router.get('/login', UserController.login)
router.post('/createUser', UserController.createUser)
router.delete('/deleteUser/:id', UserController.deleteUser)

module.exports = router