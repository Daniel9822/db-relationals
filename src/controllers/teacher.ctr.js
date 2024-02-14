const teacherService = require('../services/teacher.service')
const response = require('../utils/response')

const createTeacher = async (req, res) => {
  const body = req.body

  const create = await teacherService.create(body)
  response(res, 201, create)
}

const getTeachers = async (req, res) => {
  const data = await teacherService.getTeachers()
  response(res, 200, data)
}

module.exports = {
  createTeacher,
  getTeachers
}
