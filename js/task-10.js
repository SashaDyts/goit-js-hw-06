function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bntCreate = document.querySelector('button[data-create]');
const bntDestroy = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes');
const inputEl = document.querySelector('input');
let boxesQuantity = 0;

inputEl.addEventListener('input', onInputEl);

function onInputEl(event) {
  boxesQuantity = event.currentTarget.value;
}

bntCreate.addEventListener('click', onBtnCreateClick);

function onBtnCreateClick() {
  const result = [];
  let acc = 20;

  for (let i = 0; i < Number(boxesQuantity); i += 1) {
    acc += 10;

    const element = document.createElement('div');
    element.style.width = `${acc}px`;
    element.style.height = `${acc}px`;
    element.style.backgroundColor = getRandomHexColor();

    result.push(element);
  }

  boxesEl.append(...result);
}

bntDestroy.addEventListener('click', onBtnDestroyClick);

function onBtnDestroyClick() {
  boxesEl.innerHTML = '';
}
