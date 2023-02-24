const { Router } = require('express')
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const UserController = require('./api/controllers/UserController')
const DishController = require('./api/controllers/DishController')

const router = Router()

router.post('/login', UserController.login)
router.post('/createUser', UserController.createUser)
router.delete('/deleteUser/:id', UserController.deleteUser)

router.post('/newDish', upload.single('img_dish'),DishController.createDish)

module.exports = router