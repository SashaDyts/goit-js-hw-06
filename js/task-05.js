const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

nameInputEl.addEventListener('input', onNameInputElInput);

function onNameInputElInput(event) {
  nameOutputEl.textContent = event.currentTarget.value ? event.currentTarget.value : 'Anonymous';
}
