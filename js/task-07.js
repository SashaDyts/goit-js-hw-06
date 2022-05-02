const textEl = document.querySelector('#text');
const inputEl = document.querySelector('#font-size-control');

inputEl.value = inputEl.min;
inputEl.addEventListener('input', onFontSizeControlInput);

function onFontSizeControlInput(event) {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
}
