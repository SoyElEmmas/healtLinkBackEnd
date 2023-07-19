const express = require('express')
const router = express.Router()
//const {getMedicos,createMedico,updateMedico,deleteMedico} = require('../controllers/medicoControllers.js')
const {signUp, signIn} = require('../controllers/pacienteControllers.js')
const {checkDuplicateUsernameOrEmail} = require('../middlewares/verifySignup')


//import * as authCtrl from '../controllers/auth.controller'
//import * as verifySignup from '../middlewares/verifySignup'

router.post('/signup',[checkDuplicateUsernameOrEmail],signUp)

router.post('/signin',signIn)

module.exports = router