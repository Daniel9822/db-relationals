const { Teacher } = require('../models')
const Student = require('../models/students')
const HandleError = require('../utils/handleError')

class StudentService {
  constructor() {}

  async create(student) {

    if (!student?.teacherId) throw new HandleError('somenthing went wrong', 400)
    const findTeacher = await Teacher.findOne({
      where: { id: student.teacherId }
    })
    if (!findTeacher) throw new HandleError('somenthing went wrong', 400)

    const data = await Student.create(student)
    return data
  }

  async findStudents() {
    const response = await Student.findAll({})
    return response
  }
}

module.exports = new StudentService()
