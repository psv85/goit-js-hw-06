const inputEl = document.querySelector('#validation-input');
const textLenght = inputEl.getAttribute('data-length');
console.log(textLenght);

function onInputBlur(event) {
  if (event.currentTarget.value.length === Number(textLenght)) {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
  } else {
    inputEl.classList.add('invalid');
  }
}

inputEl.addEventListener('blur', onInputBlur);
