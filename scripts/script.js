// Mobile Toggler
let bars = document.getElementById("bars");
let navToggle = document.getElementById("navToggle");

bars.addEventListener("click", function () {
  navToggle.classList.toggle("hidden");
  navToggle.classList.toggle("active");
});

// Scroll Animation
const elements = document.querySelectorAll(".animate");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
      }
    });
  },
  {
    threshold: 0.5,
  }
);

elements.forEach((element) => {
  observer.observe(element);
});

// Back To Top Setting
let backToTopButton = document.getElementById("backToTopButton");

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});

window.addEventListener("scroll", () => {
  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 1000
  ) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// To Acount Page Function
function acountPage() {
  window.location.href = "acount.html";
}

// login and signup
window.addEventListener("load", () => {
  if (localStorage.getItem("hideElement") === "true") {
    document.getElementById("acountButton").style.display = "none";
    document.getElementById("change").innerHTML =
      'Welcome, User <a href="acount.html" class="text-info fs-6">Sign Out</a>';
  }
});
