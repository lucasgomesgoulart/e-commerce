const { Router } = require('express')
const multer = require('multer');
const UserController = require('./api/controllers/UserController')
const upload = multer({ dest: 'uploads/' });
const router = Router()

// tela feita
router.post('/createUser', UserController.create)

module.exports = router