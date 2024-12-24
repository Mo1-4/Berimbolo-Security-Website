const loadingDuration = 2000;
setTimeout(() => {
  window.location.href = "home.html";
}, loadingDuration);

localStorage.removeItem("hideElement");
