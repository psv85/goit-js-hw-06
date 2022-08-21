const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

console.log(inputEl);
console.log(spanEl);

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
  const valueInput = event.currentTarget.value;
  if (valueInput.length === 0) {
    return (spanEl.textContent = 'Anonymous');
  }
  spanEl.textContent = event.currentTarget.value;
}
