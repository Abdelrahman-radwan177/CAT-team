// Toggle between Login and Signup forms
const loginToggle = document.getElementById("login-toggle");
const signupToggle = document.getElementById("signup-toggle");
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");

loginToggle.addEventListener("click", () => {
    loginForm.classList.remove("hidden");
    signupForm.classList.add("hidden");
    loginToggle.classList.add("active");
    signupToggle.classList.remove("active");
});

signupToggle.addEventListener("click", () => {
    signupForm.classList.remove("hidden");
    loginForm.classList.add("hidden");
    signupToggle.classList.add("active");
    loginToggle.classList.remove("active");
});

// Handle form submissions
document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    alert(`Login with Email: ${email}, Password: ${password}`);
    // يمكنك هنا إضافة كود لتسجيل الدخول
});

document.getElementById("signup-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const firstName = document.getElementById("signup-firstname").value;
    const lastName = document.getElementById("signup-lastname").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    alert(`Signup with First Name: ${firstName}, Last Name: ${lastName}, Email: ${email}, Password: ${password}`);
    // يمكنك هنا إضافة كود للتسجيل
});