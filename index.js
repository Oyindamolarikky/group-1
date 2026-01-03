function validateLogin() {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const message = document.getElementById('message');

  if (username === 'admin' && password === 'password') {
    message.innerText = 'Login successful!';
    message.style.color = 'green';
  } else {
    message.innerText = 'Invalid username/password';
    message.style.color = 'red';
  }
}
