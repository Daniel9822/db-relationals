import { questionsMock } from './questions.js'
const inputContainer = document.querySelector('.inputContainer')
const question = document.querySelector('.description')
const nextButton = document.querySelector('.upgrade-btn')
const buttonContainer = document.querySelector('.modal--footer')
const modal = document.querySelector('.modal')

let answersSelectedByUser = null
let allAnswer = []
let count = 0

const click = new Audio('../tap.wav')
click.volume = 0.3

function limpiarContenedor(tag) {
  while (tag.firstChild) {
    tag.removeChild(tag.firstChild)
  }
}

const getQuestion = async (currentQuestion) => {
  //todo hacer el fetch
  const questionForUser = questionsMock[currentQuestion]
  
  limpiarContenedor(inputContainer)
  inputContainer.classList.add('fade-in')

  question.innerHTML = questionForUser.question

  questionForUser.answers.forEach((ele, i) => {
    const radioInput = document.createElement('input')
    radioInput.type = 'radio'
    radioInput.name = 'respuesta'
    radioInput.value = i

    const label = document.createElement('label')

    label.addEventListener('click', async () => {
      await click.play()
      const selected = document.querySelector('.selected')
      if (selected) {
        selected.classList.remove('selected')
      }


      label.classList.add('selected')
    })

    radioInput.addEventListener('change', (e) => {
      answersSelectedByUser = e.target.value
      nextButton.classList.remove('disable')
      nextButton.disabled = false
    })

    label.textContent = ele
    label.appendChild(radioInput)
    inputContainer.appendChild(label)
  })

  setTimeout(() => {
    inputContainer.classList.remove('fade-in')
  }, 500)
}

if (!answersSelectedByUser) {
  nextButton.disabled = true
  nextButton.classList.add('disable')
}

nextButton.addEventListener('click', async (e) => {
  e.preventDefault()
  if (!answersSelectedByUser) {
    return
  }
  allAnswer.push(answersSelectedByUser)
  answersSelectedByUser = null

  if (count <= 9) {
    count += 1
  }

  if (count === 9) {
    nextButton.innerHTML = 'Finalizar'
  }

  if (count === 10) {
    count = 9
    limpiarContenedor(buttonContainer)
    const score = calculateScore()
    vieScore(score)

    if (score > 70) {
      tsParticles.load({
        id: 'tsparticles',
        options: {
          preset: 'fireworks'
        }
      })

      setTimeout(() => {
        modal.remove()
      }, 5000)
    }
    downloadLink()
  }

  await getQuestion(count)

  console.log(allAnswer)
})

const calculateScore = () => {
  let score = 0
  for (let i = 0; i <= questionsMock.length - 1; i++) {
    if (questionsMock[i].correctAnswer === Number(allAnswer[i])) {
      score += 10
    }
  }
  return score
}

window.addEventListener('beforeunload', function (event) {
  event.preventDefault()

  event.returnValue = ''
  const message =
    'Estás a punto de recargar la página. ¿Estás seguro de que quieres hacerlo? Se perderán los datos no guardados.'
  event.returnValue = message
  return message
})

const downloadLink = () => {
  fetch('question.txt')
    .then((response) => {
      if (!response.ok) {
        throw new Error('No se pudo cargar el archivo question.txt')
      }
      return response.text()
    })
    .then((texto) => {
      // Crear un Blob con el contenido del archivo
      const blob = new Blob([texto], { type: 'text/plain;charset=utf-8' })

      // Crear un enlace de descarga
      const downloadLink = document.createElement('a')
      // downloadLink.classList.add('download')
      downloadLink.download = 'DB_relational.txt'
      downloadLink.href = URL.createObjectURL(blob)

      downloadLink.textContent = 'Descargar'
      // Agregar el enlace al cuerpo del documento
      document.body.appendChild(downloadLink)

      downloadLink.click()
      // Eliminar el enlace después de que se descargue el archivo
      setTimeout(() => {
        document.body.removeChild(downloadLink)
      }, 100)
    })
    .catch((error) => {
      console.error('Error:', error)
    })
}

const vieScore = (score) => {
  const span = document.createElement('span')
  span.classList.add('score')

  span.innerHTML = `${score} de 100`
  buttonContainer.appendChild(span)
}

await getQuestion(0)
