const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputElBlur);

function onInputElBlur(event) {
  if (event.currentTarget.value.length < inputEl.dataset.length) {
    event.currentTarget.classList.remove('valid');
    event.currentTarget.classList.add('invalid');
  } else {
    event.currentTarget.classList.remove('invalid');
    event.currentTarget.classList.add('valid');
  }
}
