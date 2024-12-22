const contactImageAnimation = document.querySelector(".contact-video");
contactImageAnimation.classList.add("animate__animated", "animate__fadeInLeft");

const contactFormAnimation = document.querySelector(".contact-form");
contactFormAnimation.classList.add("animate__animated", "animate__fadeInRight");

// Email Validation
document.getElementById("form").addEventListener("submit", function (event) {
  const emailInput = document.getElementById("formEmail").value;
  const message = document.getElementById("message");

  if (validateEmail(emailInput)) {
    message.textContent = "Valid email address!";
    message.style.color = "green";
  } else {
    message.textContent = "Invalid email address. Please try again.";
    message.style.color = "red";
    event.preventDefault();
  }
});

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
