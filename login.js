document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form")
  const usernameInput = document.getElementById("username")
  const passwordInput = document.getElementById("password")
  const captchaInput = document.getElementById("captcha")
  const togglePasswordBtn = document.getElementById("toggle-password")
  const refreshCaptchaBtn = document.getElementById("refresh-captcha")

  const usernameError = document.getElementById("username-error")
  const passwordError = document.getElementById("password-error")
  const captchaError = document.getElementById("captcha-error")

  // Toggle password visibility
  if (togglePasswordBtn) {
    togglePasswordBtn.addEventListener("click", () => {
      const type = passwordInput.getAttribute("type") === "password" ? "text" : "password"
      passwordInput.setAttribute("type", type)

      // Toggle eye icon
      const eyeIcon = togglePasswordBtn.querySelector(".eye-icon")
      const eyeOffIcon = togglePasswordBtn.querySelector(".eye-off-icon")

      if (type === "password") {
        eyeIcon.style.display = "block"
        eyeOffIcon.style.display = "none"
      } else {
        eyeIcon.style.display = "none"
        eyeOffIcon.style.display = "block"
      }
    })
  }

  // Refresh CAPTCHA
  if (refreshCaptchaBtn) {
    refreshCaptchaBtn.addEventListener("click", () => {
      // In a real implementation, this would fetch a new CAPTCHA image
      // For demo purposes, we'll just show a message
      alert("CAPTCHA refreshed")
    })
  }

  // Form validation
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault()

      let isValid = true

      // Reset error messages
      usernameError.textContent = ""
      passwordError.textContent = ""
      captchaError.textContent = ""

      // Validate username
      if (!usernameInput.value.trim()) {
        usernameError.textContent = "Username is required"
        isValid = false
      }

      // Validate password
      if (!passwordInput.value) {
        passwordError.textContent = "Password is required"
        isValid = false
      } else if (passwordInput.value.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters"
        isValid = false
      }

      // Validate CAPTCHA
      if (!captchaInput.value.trim()) {
        captchaError.textContent = "Please enter the CAPTCHA"
        isValid = false
      }

      if (isValid) {
        // In a real implementation, this would submit the form to the server
        // For demo purposes, we'll redirect to the dashboard
        window.location.href = "dashboard.html"
      }
    })
  }

  // Remember username functionality
  const rememberMeCheckbox = document.getElementById("remember-me")

  if (rememberMeCheckbox) {
    // Check if username is saved in localStorage
    const savedUsername = localStorage.getItem("sbi_username")
    if (savedUsername) {
      usernameInput.value = savedUsername
      rememberMeCheckbox.checked = true
    }

    // Save username when form is submitted
    loginForm.addEventListener("submit", () => {
      if (rememberMeCheckbox.checked) {
        localStorage.setItem("sbi_username", usernameInput.value)
      } else {
        localStorage.removeItem("sbi_username")
      }
    })
  }
})