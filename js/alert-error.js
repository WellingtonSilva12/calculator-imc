export const AlertError = {
  element: document.querySelector('.alert-error'),
  open() {
    AlertError.element.classList.add('open')
    setTimeout(function () {
      AlertError.element.classList.remove('open')
    }, 5000)
  },
  close() {
    AlertError.element.classList.remove('open')
  }
}
