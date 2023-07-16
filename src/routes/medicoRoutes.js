const express = require('express')
const router = express.Router()
const {getMedicos} = require('../controllers/medicoControllers.js')

router.get('/', getMedicos)



module.exports = router