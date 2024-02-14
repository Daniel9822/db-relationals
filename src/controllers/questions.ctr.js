const questionService = require('../services/question.service')
const HandleError = require('../utils/handleError')
const response = require('../utils/response')

const createQuestion = async (req, res) => {
  const body = req.body
  const { email } = body

  console.log(email);
  if (!email) {
    throw new HandleError('email is require', 400)
  }
  const data = await questionService.create(email)
  response(res, 200, data)
}

module.exports = {
  createQuestion
}
