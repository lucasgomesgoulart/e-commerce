const { Router } = require('express')
const multer = require('multer');
const AddressController = require('./api/controllers/AddressController');
const LoginController = require('./api/controllers/LoginController')
const UserController = require('./api/controllers/UserController')
const upload = multer({ dest: 'uploads/' });
const router = Router()

router.post('/login', LoginController.login)
router.post('/createUser', UserController.create)
router.delete('/deleteUser/:id', UserController.delete)
router.patch('/updateUser/:id', UserController.update)

router.post('/createAddress', AddressController.create)

module.exports = router