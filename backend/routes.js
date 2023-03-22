const { Router } = require('express')
const AddressController = require('./api/controllers/AddressController');
const DishController = require('./api/controllers/DishController');
const LoginController = require('./api/controllers/LoginController');
const RestaurantController = require('./api/controllers/RestaurantController');
const UserController = require('./api/controllers/UserController')
const OrderController = require('./api/controllers/OrderController')
const verifyToken = require('./api/middlewares/verifyToken');

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const router = Router()

//login
router.post('/login', LoginController.login)

//user
router.get('/findUserRestaurants/:id', verifyToken, UserController.findUserRestaurants) // tras os dados do usuario e seus restaurantes.
router.post('/createUser', verifyToken, UserController.create)
router.delete('/deleteUser/:id', verifyToken, UserController.delete)
router.patch('/updateUser/:id', verifyToken, UserController.update)
router.get('/users', UserController.findByEmail);


//address
router.post('/createAddress', verifyToken, AddressController.create)
router.delete('/deleteAddress/:id', verifyToken, AddressController.delete)
router.patch('/updateAddress/:id', verifyToken, AddressController.update)

//restaurants

router.post('/createRestaurant', verifyToken, RestaurantController.create)
router.patch('/updateRestaurant/:id', verifyToken, RestaurantController.update)
router.delete('/deleteRestaurant/:id', verifyToken, RestaurantController.delete)
router.get('/findDishes/:id', RestaurantController.findDishes) // retornar o restaurante e seus pratos.
//dishes
router.post('/createDish', verifyToken, DishController.create)
router.patch('/updateDish/:id', verifyToken, DishController.update)
router.delete('/deleteDish/:id', verifyToken, DishController.delete)

//order
router.post('/createOrder', verifyToken, OrderController.createOrder)
module.exports = router