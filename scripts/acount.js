// Animation
document.addEventListener("DOMContentLoaded", () => {
  const signUpButton = document.getElementById("signUp");
  const signInButton = document.getElementById("signIn");
  const container = document.getElementById("container");

  if (signUpButton && signInButton && container) {
    signInButton.addEventListener("click", () => {
      container.classList.add("right-panel-active");
      document.title = "Sign-Up";
    });

    signUpButton.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
      document.title = "Sign-In";
    });
  }
});

// Validation
let passwords = document.querySelectorAll("#password");
passwords.forEach((pass) => {
  pass.addEventListener("mouseover", () => {
    pass.type = "text";
  });
  pass.addEventListener("mouseout", () => {
    pass.type = "password";
  });
});

document.getElementById("signInForm").addEventListener("submit", (event) => {
  const emailInput = document.getElementById("signInEmail").value;
  const message = document.getElementById("messageI");

  if (validateEmail(emailInput)) {
    event.preventDefault();
    message.style.display = "block";
    message.textContent = "Valid email address!";
    message.style.color = "green";
    setTimeout(() => {
      localStorage.setItem("hideElement", "true");
      window.location.href = "home.html";
    }, 2000);
  } else {
    message.style.display = "block";
    message.textContent = "Invalid email address. Please try again.";
    message.style.color = "red";
    event.preventDefault();
  }
});

document.getElementById("signUpForm").addEventListener("submit", (event) => {
  const emailInput = document.getElementById("signUpEmail").value;
  const message = document.getElementById("messageU");

  if (validateEmail(emailInput)) {
    event.preventDefault();
    message.style.display = "block";
    message.textContent = "Valid email address!";
    message.style.color = "green";
    setTimeout(() => {
      localStorage.setItem("hideElement", "true");
      window.location.href = "home.html";
    }, 3000);
  } else {
    message.style.display = "block";
    message.textContent = "Invalid email address. Please try again.";
    message.style.color = "red";
    event.preventDefault();
  }
});

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

if (localStorage.getItem("hideElement") === "true") {
  localStorage.removeItem("hideElement");
}
