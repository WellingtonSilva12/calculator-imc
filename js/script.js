import { AlertError } from './alert-error.js'
import { notNumber, displayResultMessage } from './utils.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = function (e) {
  e.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHeightIsNotNumber = notNumber(weight) || notNumber(height)

  if (weightOrHeightIsNotNumber) {
    AlertError.open()
    return
  }

  AlertError.close()

  const result = weight / (height / 100) ** 2
  displayResultMessage(result)
}

inputHeight.oninput = () => AlertError.close()
inputWeight.oninput = () => AlertError.close()
