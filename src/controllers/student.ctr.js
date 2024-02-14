const studentService = require("../services/student.service")
const response = require("../utils/response")

const createStudent = async (req, res) => {
  const body = req.body

  const create = await studentService.create(body)
  response(res, 201, create)
}

const getStudents = async(req, res) => {
  const data = await studentService.findStudents()
  if(!data?.length){
    response(res, 404, 'Not found')
  }

  response(res, 200, data)
}

module.exports = {
  createStudent,
  getStudents
}