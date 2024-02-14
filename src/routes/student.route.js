const { createStudent, getStudent } = require('../controllers')

const router = require('express').Router()

router.get('/', getStudent)
router.post('/', createStudent)

module.exports = router