document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logout-btn");
  const homeBtn = document.getElementById("home-btn");
  const aboutUsBtn = document.getElementById("aboutus-btn");
  const educationBtn = document.getElementById("education-btn");
  const marketBtn = document.getElementById("market-btn");
  const learnBtn = document.getElementById("learn-btn");
  const allcoinsBtn = document.getElementById("allcoins-btn");
  const user = JSON.parse(localStorage.getItem("user")); // gets the user object from localStorage

  // welcome message

  if (user && user.first_name) {
    const name = user.first_name.charAt(0).toUpperCase() + user.first_name.slice(1).toLowerCase();

    const welcomeEl = document.getElementById("welcome-message");
    welcomeEl.innerHTML = `Bienvenido <span class="hero-highlight">${name}</span> 👋`;
  }

  // login, register, logout buttons
  const loginBtn = document.getElementById("login-btn");
  const registerBtn = document.getElementById("register-btn");

  console.log("Valor de isLoggedIn en localStorage:", localStorage.getItem("isLoggedIn"));

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  // show/hide buttons based on login status
  if (isLoggedIn) {
    if (loginBtn) loginBtn.style.display = "none";
    if (registerBtn) registerBtn.style.display = "none";
    if (logoutBtn) logoutBtn.style.display = "inline-block";
  } else {
    if (loginBtn) loginBtn.style.display = "inline-block";
    if (registerBtn) registerBtn.style.display = "inline-block";
    if (logoutBtn) logoutBtn.style.display = "none";
  }

  // navigation buttons
  if (homeBtn) {
    homeBtn.addEventListener("click", () => {
      window.location.href = isLoggedIn ? "./dashboard.html" : "./index.html";
    });
  }

  if (aboutUsBtn) {
    aboutUsBtn.addEventListener("click", () => {
      window.location.href = "./about_us.html";
    });
  }

  if (educationBtn) {
    educationBtn.addEventListener("click", () => {
      window.location.href = "./courses.html";
    });
  }

  if (marketBtn) {
    marketBtn.addEventListener("click", () => {
      window.location.href = "./market.html";
    });
  }
  
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("user");
      window.location.href = "./index.html";
    });
  }

  if (learnBtn) {
        learnBtn.addEventListener("click", () => {
            window.location.href = "./courses.html";
        });
    }

    if (allcoinsBtn) {
        allcoinsBtn.addEventListener("click", () => {
            window.location.href = "./market.html";
        });
    }
});
