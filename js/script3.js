function validateRegisterForm() {
  let valid = true;

  const username = document.getElementById("regUsername");
  const email = document.getElementById("regEmail");
  const password = document.getElementById("regPassword");
  const confirmPassword = document.getElementById("regConfirmPassword");

  const usernameError = document.getElementById("regUsernameError");
  const emailError = document.getElementById("regEmailError");
  const passwordError = document.getElementById("regPasswordError");
  const confirmPasswordError = document.getElementById("regConfirmPasswordError");

  // Clear previous errors
  usernameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  confirmPasswordError.textContent = "";

  if (username.value.trim() === "") {
    usernameError.textContent = "Username is required";
    valid = false;
  }

  if (email.value.trim() === "") {
    emailError.textContent = "Email is required";
    valid = false;
  }

  if (password.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    valid = false;
  }

  if (password.value !== confirmPassword.value) {
    confirmPasswordError.textContent = "Passwords do not match";
    valid = false;
  }

   if (valid) {
    window.location.href = "index.html";
  }

  return false;
}
