const { Questions } = require('../models')

class QuestionSevices {

  async create (email) {
    const question = await Questions.create({
      email
    })

    return question
  }
}


module.exports = new QuestionSevices