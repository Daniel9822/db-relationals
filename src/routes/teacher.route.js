const response = require('../utils/response')
const { createTeacher, getTeachers } = require('../controllers')

const router = require('express').Router()

router.get('/', getTeachers)
router.post('/', createTeacher)

module.exports = router
