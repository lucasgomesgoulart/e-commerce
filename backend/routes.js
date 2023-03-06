const { Router } = require('express')
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const router = Router()

module.exports = router