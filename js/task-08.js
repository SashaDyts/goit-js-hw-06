const loginFormEl = document.querySelector('.login-form');

loginFormEl.addEventListener('submit', onLoginFormElSubmit);

function onLoginFormElSubmit(event) {
  event.preventDefault();

  const email = event.currentTarget.email.value;
  const password = event.currentTarget.password.value;

  if (email === '' || password === '') {
    alert('Всі поля повинні бути заповнені!');

    return;
  }

  const formData = {
    email,
    password,
  };

  console.log(formData);

  event.currentTarget.reset();
}
