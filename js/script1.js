function validateLoginForm() {
  let username = document.getElementById("loginUsername").value.trim();
  let password = document.getElementById("loginPassword").value.trim();

  let usernameError = document.getElementById("loginUsernameError");
  let passwordError = document.getElementById("loginPasswordError");

  usernameError.textContent = "";
  passwordError.textContent = "";

  let isValid = true;

  if (username === "") {
    usernameError.textContent = "Please enter your username";
    isValid = false;
  } else if (username.length < 3) {
    usernameError.textContent = "Username must be at least 3 characters";
    isValid = false;
  }

  if (password === "") {
    passwordError.textContent = "Please enter your password";
    isValid = false;
  } else if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    isValid = false;
  }

  return isValid;
}
