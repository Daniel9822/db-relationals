
const form = document.querySelector('.container')
const mailInput = document.querySelector('.input-is')

form.addEventListener('submit', e => {
  e.preventDefault()

  const emailValue = mailInput.value
  
  const create = createQuestionUser(emailValue).then()
  
  if(!create.error) {
    window.location.href = '/questions'
  }
  
})


const createQuestionUser = async (email) => {
  const data = await fetch('/api/questions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email})
  })

  const result = await data.json()
  return result
}