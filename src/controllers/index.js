const catchError = require('../utils/catchError')
const { createTeacher, getTeachers } = require('./teacher.ctr')
const { createStudent, getStudents } = require('./student.ctr')
const { createQuestion } = require('./questions.ctr')


module.exports = {
  createTeacher: catchError(createTeacher),
  createStudent: catchError(createStudent),
  getTeachers: catchError(getTeachers),
  getStudent: catchError(getStudents),
  createQuestion: catchError(createQuestion)
}