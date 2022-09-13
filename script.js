const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal button.close'),

  open() {
    Modal.wrapper.classList.add('open')
  },
  close() {
    Modal.wrapper.classList.remove('open')
  }
}

form.onsubmit = function (e) {
  e.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const result = weight / (height / 100) ** 2
  const message = `Seu IMC é de ${result.toFixed(2)}`

  Modal.message.innerText = message
  Modal.open()
}

Modal.buttonClose.onclick = function () {
  Modal.close()
}
