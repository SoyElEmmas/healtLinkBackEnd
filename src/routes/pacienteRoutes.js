const express = require('express')
const router = express.Router()
const {signUp, signIn, getPacientes,
       getPacienteById, updatePacienteById,deletePacienteById} = require('../controllers/pacienteControllers.js')
const {checkDuplicateUsernameOrEmail} = require('../middlewares/verifySignup')
const {verifyToken} = require('../middlewares/authJwt.js')


//import * as authCtrl from '../controllers/auth.controller'
//import * as verifySignup from '../middlewares/verifySignup'

router.post('/signup',[checkDuplicateUsernameOrEmail],signUp)
router.post('/signin',signIn)
router.get('/',[verifyToken],getPacientes)
router.get('/:idPaciente',[verifyToken],getPacienteById)
router.put('/:idPaciente',[verifyToken],updatePacienteById)
router.delete('/:idPaciente',[verifyToken],deletePacienteById)

module.exports = router