function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const buttonEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');

buttonEl.addEventListener('click', onChangeColor);

function onChangeColor(event) {
  getRandomHexColor();
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = bodyEl.style.backgroundColor;
}