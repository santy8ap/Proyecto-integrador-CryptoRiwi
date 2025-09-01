// Detecta si está en local o en producción
const API_URL = window.location.hostname.includes("localhost")
  ? "http://localhost:3000"
  : "https://proyecto-integrador-cryptoriwi.onrender.com";

document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (data.success) {
      document.getElementById("login-message").textContent = "✅ Successful login!";
      document.getElementById("login-message").classList.remove("text-danger");
      document.getElementById("login-message").classList.add("text-success");

      // guardar sesión
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("user", JSON.stringify(data.user));

      // redirigir a dashboard
      window.location.href = "./dashboard.html";
    } else {
      document.getElementById("login-message").textContent = "❌ Incorrect credentials";
    }
  } catch (err) {
    console.error(err);
    document.getElementById("login-message").textContent = "⚠️ Server error";
  }
});

// handling back home button
const backBtn = document.getElementById("back-btn");
if (backBtn) {
  backBtn.addEventListener("click", () => {
    window.location.href = "./index.html";
  });
}
