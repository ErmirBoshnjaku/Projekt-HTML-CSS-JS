function validateContactForm() {
  let name = document.getElementById("contactName").value.trim();
  let email = document.getElementById("contactEmail").value.trim();
  let message = document.getElementById("contactMessage").value.trim();

  let nameError = document.getElementById("contactNameError");
  let emailError = document.getElementById("contactEmailError");
  let messageError = document.getElementById("contactMessageError");

  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";

  let valid = true;

  if (name === "") {
    nameError.textContent = "Please enter your name";
    valid = false;
  }

  if (email === "") {
    emailError.textContent = "Please enter your email";
    valid = false;
  } else if (!email.includes("@") || !email.includes(".")) {
    emailError.textContent = "Please enter a valid email";
    valid = false;
  }

  if (message === "") {
    messageError.textContent = "Please enter your message";
    valid = false;
  } else if (message.length < 10) {
    messageError.textContent = "Message must be at least 10 characters";
    valid = false;
  }

  return valid; 
}

document.getElementById("contactForm").onsubmit = function() {
  return validateContactForm();
};
