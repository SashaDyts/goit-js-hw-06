const decrementBtnEl = document.querySelector('button[data-action="decrement"]');
const incrementBtnEl = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');
let counterValue = 0;

const onDecrementBtnElClick = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

const onIncrementBtnElClick = () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};

decrementBtnEl.addEventListener('click', onDecrementBtnElClick);
incrementBtnEl.addEventListener('click', onIncrementBtnElClick);
