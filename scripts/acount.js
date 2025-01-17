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
  const signInPassword = document.querySelector(".signInPassword").value;
  if (emailInput == "" || signInPassword == "") {
    message.style.display = "block";
    message.textContent = "Invalid Form address. Please try again.";
    message.style.color = "red";
    event.preventDefault();
  } else if (!validateEmail(emailInput)){
    message.style.display = "block";
    message.textContent = "Invalid Email address. Please try again.";
    message.style.color = "red";
    event.preventDefault();
  } else if (signInPassword.length < 8){
    message.style.display = "block";
    message.textContent = "Invalid Password address. Please try again.";
    message.style.color = "red";
    event.preventDefault();
   } else {
    event.preventDefault();
    message.style.display = "block";
    message.textContent = "Valid Form address!";
    message.style.color = "green";
    setTimeout(() => {
      localStorage.setItem("hideElement", "true");
      window.location.href = "home.html";
    }, 2000);
  }
});

document.getElementById("signUpForm").addEventListener("submit", (event) => {
  const emailInput = document.getElementById("signUpEmail").value;
  const message = document.getElementById("messageU");
  const signUpPassword = document.querySelector(".signUpPassword").value;
  const signUpConfirmPassword = document.querySelector(".signUpConfirmPassword").value
  if (emailInput == "" || signUpPassword == "") {
    message.style.display = "block";
    message.textContent = "Invalid Form address. Please try again.";
    message.style.color = "red";
    event.preventDefault();
  } else if (!validateEmail(emailInput)){
    message.style.display = "block";
    message.textContent = "Invalid Email address. Please try again.";
    message.style.color = "red";
    event.preventDefault();
  } else if (signUpPassword.length < 8){
    message.style.display = "block";
    message.textContent = "Invalid Password address. Please try again.";
    message.style.color = "red";
    event.preventDefault();
   } else if (signUpConfirmPassword != signUpPassword){
    message.style.display = "block";
    message.textContent = "Invalid Correct Password address. Please try again.";
    message.style.color = "red";
    event.preventDefault();
   }
   else {
    event.preventDefault();
    message.style.display = "block";
    message.textContent = "Valid Form address!";
    message.style.color = "green";
    setTimeout(() => {
      localStorage.setItem("hideElement", "true");
      window.location.href = "home.html";
    }, 2000);
  }
});

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

if (localStorage.getItem("hideElement") === "true") {
  localStorage.removeItem("hideElement");
}
