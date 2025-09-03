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
    const exchangeBtn = document.getElementById("exchange-btn");
    const walletBtn = document.getElementById("wallet-btn");

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

    if (exchangeBtn) {
        exchangeBtn.addEventListener("click", () => {
            window.location.href = "./exchange.html";
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

    if (walletBtn) {
        walletBtn.addEventListener("click", () => {
            window.location.href = "./wallet.html";
        });
    }

    // --- NUEVO: enlaces de las tarjetas del index ---
    const cardLinks = document.querySelectorAll(".card-link");

    if (cardLinks.length > 0) {
        // Primer link → "Comenzar a aprender"
        cardLinks[0].addEventListener("click", (e) => {
            e.preventDefault();
            window.location.href = "./courses.html";
        });
    }

    if (cardLinks.length > 1) {
        // Segundo link → "Ver precio"
        cardLinks[1].addEventListener("click", (e) => {
            e.preventDefault();
            window.location.href = "./exchange.html";
        });
    }
});
