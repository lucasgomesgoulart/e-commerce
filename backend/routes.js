const { Router } = require('express')
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const UserController = require('./api/controllers/UserController')
const DishController = require('./api/controllers/DishController')
const authMiddleware = require('./api/middlewares/auth.middleware');
const AddressController = require('./api/controllers/AddressController');
const router = Router()

//tela feita
router.post('/createUser', UserController.createUser)

//proxima tela a ser feita.
router.post('/login', UserController.login)

router.delete('/deleteUser/:id', authMiddleware, UserController.deleteUser)

router.post('/newDish', upload.single('img_dish'), authMiddleware, DishController.createDish)


router.post('/newAddress', authMiddleware, AddressController.createAddress)
module.exports = router