document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname.endsWith("index.html")) {
        if (localStorage.getItem("isLoggedIn") == "true") {
            localStorage.clear();
        }
    }

    const authButtons = document.getElementById("auth-buttons");
    const loginBtn = document.getElementById("login-btn");
    const registerBtn = document.getElementById("register-btn"); 
    const homeBtn = document.getElementById("home-btn");
    const aboutUsBtn = document.getElementById("aboutus-btn");
    const educationBtn = document.getElementById("education-btn");
    const marketBtn = document.getElementById("market-btn");
    const learnBtn = document.getElementById("learn-btn");
    const allcoinsBtn = document.getElementById("allcoins-btn");

    console.log("Valor de isLoggedIn en localStorage:", localStorage.getItem("isLoggedIn"));

    if (localStorage.getItem("isLoggedIn") == "true"){
        authButtons.innerHTML = `<button id="logout-btn" class="btn btn-outline-light" type="button">Cerrar sesión</button>`;
        const logoutBtn = document.getElementById("logout-btn");
        if (logoutBtn) {
            logoutBtn.addEventListener("click", () => {
                localStorage.removeItem("isLoggedIn");
                localStorage.removeItem("user");
                window.location.href = "./index.html";
            });
        }
    }

    if (aboutUsBtn){
        aboutUsBtn.addEventListener("click", () => {
            window.location.href = "./about_us.html";
        });
    }

    if (homeBtn) {
        homeBtn.addEventListener("click", () => {
            window.location.href = "./dashboard.html";
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

    if (loginBtn) {
        loginBtn.addEventListener("click", () => {
            window.location.href = "./login.html";
        });
    }

    if (registerBtn) {
        registerBtn.addEventListener("click", () => {
            window.location.href = "./register.html";
        });
    }

    if (learnBtn) {
        learnBtn.addEventListener("click", () => {
            window.location.href = "./login.html";
        });
    }

    if (allcoinsBtn) {
        allcoinsBtn.addEventListener("click", () => {
            window.location.href = "./login.html";
        });
    }

    // Card links
    const cardLinks = document.querySelectorAll(".card-link");

    if (cardLinks.length > 0) {
        // first link → "see courses"
        cardLinks[0].addEventListener("click", (e) => {
            e.preventDefault();
            window.location.href = "./courses.html";
        });
    }

    if (cardLinks.length > 1) {
        // second link → "see all coins"
        cardLinks[1].addEventListener("click", (e) => {
            e.preventDefault();
            window.location.href = "./market.html";
        });
    }
});
