const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  if (formElements.email.value === '' || formElements.password.value === '') {
    return console.log('Please fill in all the fields!');
  }

  const formData = {
    email,
    password,
  };

  console.log(formData);

  event.currentTarget.reset();
}
