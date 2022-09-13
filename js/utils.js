import { Modal } from './modal.js'

export function notNumber(value) {
  return isNaN(value) || value == ''
}

export function displayResultMessage(result) {
  const message = `Seu IMC é de ${result.toFixed(2)}`

  Modal.message.innerText = message
  Modal.open()

  const messageText = document.querySelector('.message-text')

  if (result < 19) {
    messageText.innerHTML = `<p>Abaixo do Peso Normal</p>`
  } else if (result > 19 && result < 25) {
    messageText.innerHTML = `<p>Peso Normal</p>`
  } else if (result > 25 && result < 29) {
    messageText.innerHTML = `<p>Excesso de Peso</p>`
  } else if (result > 29 && result < 35) {
    messageText.innerHTML = `<p>Obesidade Grau I</p>`
  } else if (result > 35 && result < 40) {
    messageText.innerHTML = `<p>Obesidade Grau II</p>`
  } else if (result >= 40) {
    messageText.innerHTML = `<p>Obesidade Grau III</p>`
  }
}
