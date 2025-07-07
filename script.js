function checkPassword() {
  const passwordInput = document.getElementById("password").value;
  const correctPassword = "love2025"; // You can change this

  if (passwordInput === correctPassword) {
    document.getElementById("password-screen").style.display = "none";
    document.getElementById("gallery").style.display = "block";
  } else {
    document.getElementById("error-msg").innerText = "Wrong password! Try again 💔";
  }
}