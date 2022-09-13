export const Modal = {
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

Modal.buttonClose.onclick = function () {
  Modal.close()
}

window.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    Modal.close()
  }
})

window.addEventListener('click', function (e) {
  if (e.target == Modal.wrapper) {
    Modal.close()
  }
})
