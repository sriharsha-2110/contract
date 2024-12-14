const loginForm = document.getElementById('loginForm');
const alertMessage = document.getElementById('alertMessage');
let failedAttempts = 0;
const maxAttempts = 3;

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  if (failedAttempts >= maxAttempts) {
    alertMessage.textContent = 'Maximum login attempts reached. Please try again later.';
    alertMessage.style.display = 'block';
    return;
  }

  const phone = document.getElementById('phone').value;
  const password = document.getElementById('password').value;

  fetch('/farmer_login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ phone, password })
  })
    .then((response) => {
      if (response.ok) {
        window.location.href = 'farmerDetails.html';
      } else {
        failedAttempts++;
        return response.json();
      }
    })
    .then((data) => {
      if (data) {
        alertMessage.textContent = data.message || 'Login failed. Please try again.';
        alertMessage.style.display = 'block';
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      alertMessage.textContent = 'An error occurred. Please try again.';
      alertMessage.style.display = 'block';
    });
});
