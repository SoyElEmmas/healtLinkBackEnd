const express = require('express')
const router = express.Router()
const {getMedicos,createMedico,updateMedico,deleteMedico} = require('../controllers/medicoControllers.js')

router.get('/', getMedicos)
router.post('/',createMedico)
router.put('/:id',updateMedico)
router.delete('/:id',deleteMedico)



module.exports = router