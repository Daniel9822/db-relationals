const Student  = require('../models/students')
const Teacher = require('../models/teacher')

class TeacherService {
  constructor(){}

  async create(teacher){
    const data = await Teacher.create(teacher)
    return data
  }

  async getTeachers () {
    const teachers = await Teacher.findAll({
      include: {
        model: Student
      }
    })

    return teachers
  }
}


module.exports = new TeacherService