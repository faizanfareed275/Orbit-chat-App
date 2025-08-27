document.addEventListener('DOMContentLoaded', () => {
  const loginBtn = document.getElementById('login-btn');

  loginBtn.addEventListener('click', () => {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    if (username && password) {
      window.location.href = "chat.html";
    } else {
      alert("Please enter both username and password");
    }
  });
});
