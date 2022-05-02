function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColorEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const colorEl = document.querySelector('.color');

btnChangeColorEl.addEventListener('click', onBtnChangeColorElClick);

function onBtnChangeColorElClick() {
  const color = getRandomHexColor();

  bodyEl.style.backgroundColor = color;
  colorEl.textContent = color;
}
