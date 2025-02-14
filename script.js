// Simple form validation for Sign In and Sign Up
document.querySelector("#sign-in form").addEventListener("submit", function(event) {
    const email = document.querySelector("#sign-in #email");
    const password = document.querySelector("#sign-in #password");
  
    if (!email.value || !password.value) {
      event.preventDefault();
      alert("Please fill in all fields.");
    }
  });
  
  document.querySelector("#sign-up form").addEventListener("submit", function(event) {
    const name = document.querySelector("#sign-up #name");
    const email = document.querySelector("#sign-up #email");
    const password = document.querySelector("#sign-up #password");
    const confirmPassword = document.querySelector("#sign-up #confirm-password");
  
    if (!name.value || !email.value || !password.value || !confirmPassword.value) {
      event.preventDefault();
      alert("Please fill in all fields.");
    }
  
    if (password.value !== confirmPassword.value) {
      event.preventDefault();
      alert("Passwords do not match.");
    }
  });
  