document.addEventListener("DOMContentLoaded", () => {
    // automatic logout if on index.html and logged in
    if (window.location.pathname.endsWith("index.html")) {
        if (localStorage.getItem("isLoggedIn") == "true") {
            localStorage.clear();
        }
    }

    // DOM elements
    const authButtons = document.getElementById("auth-buttons");
    const loginBtn = document.getElementById("login-btn");
    const registerBtn = document.getElementById("register-btn"); 
    const homeBtn = document.getElementById("home-btn");
    const aboutUsBtn = document.getElementById("aboutus-btn");
    const educationBtn = document.getElementById("education-btn");
    const marketBtn = document.getElementById("market-btn");

    console.log("Valor de isLoggedIn en localStorage:", localStorage.getItem("isLoggedIn"));

    if (localStorage.getItem("isLoggedIn") != "true"){
        window.location.href = "./login.html";
    }

    // show/hide buttons based on login status
    if (localStorage.getItem("isLoggedIn") == "true") {
        authButtons.innerHTML = `<button id="logout-btn" class="btn btn-outline-light" type="button">Logout</button>`;
        const logoutBtn = document.getElementById("logout-btn");
        if (logoutBtn) {
            logoutBtn.addEventListener("click", () => {
                localStorage.removeItem("isLoggedIn");
                localStorage.removeItem("user");
                window.location.href = "./index.html";
            });
        }
    }

    // navigation buttons
    if (aboutUsBtn){
        aboutUsBtn.addEventListener("click", () => {
            window.location.href = "./about_us.html";
        });
    }

    if (homeBtn){
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

    // function to load TradingView widget
    function loadTradingView(symbol) {
        document.getElementById("tradingview_chart").innerHTML = ""; // clear before loading new
        new TradingView.widget({
            "container_id": "tradingview_chart",
            "autosize": true,
            "symbol": symbol,
            "interval": "1",
            "timezone": "Etc/UTC",
            "theme": "dark",
            "style": "1",
            "locale": "es",
            "enable_publishing": false,
            "studies": ["Volume@tv-basicstudies"],
            "withdateranges": true,
            "range": "1D"
        });
    }

    // initial load
    loadTradingView("BINANCE:BTCUSDT");

    // selector listener
    const cryptoSelect = document.getElementById("crypto-select");
    if (cryptoSelect) {
        cryptoSelect.addEventListener("change", (e) => {
            loadTradingView(e.target.value);
        });
    }
});
