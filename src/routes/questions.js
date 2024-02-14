const { createQuestion } = require('../controllers')

const router = require('express').Router()

router.post('/', createQuestion)


module.exports = router