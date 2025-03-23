document.addEventListener("DOMContentLoaded", () => {
  // User dropdown toggle
  const userMenuToggle = document.getElementById("user-menu-toggle")
  const userDropdown = document.getElementById("user-dropdown")

  if (userMenuToggle && userDropdown) {
    userMenuToggle.addEventListener("click", () => {
      userDropdown.classList.toggle("active")

      // Toggle aria-expanded attribute
      const isExpanded = userDropdown.classList.contains("active")
      userMenuToggle.setAttribute("aria-expanded", isExpanded)
    })

    // Close dropdown when clicking outside
    document.addEventListener("click", (event) => {
      if (!userMenuToggle.contains(event.target) && !userDropdown.contains(event.target)) {
        userDropdown.classList.remove("active")
        userMenuToggle.setAttribute("aria-expanded", "false")
      }
    })
  }

  // Sidebar toggle for mobile
  const sidebarToggle = document.getElementById("sidebar-toggle")
  const sidebar = document.getElementById("sidebar")

  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener("click", () => {
      sidebar.classList.toggle("active")

      // Toggle aria-expanded attribute
      const isExpanded = sidebar.classList.contains("active")
      sidebarToggle.setAttribute("aria-expanded", isExpanded)
    })

    // Close sidebar when clicking outside on mobile
    document.addEventListener("click", (event) => {
      if (window.innerWidth <= 768 && !sidebarToggle.contains(event.target) && !sidebar.contains(event.target)) {
        sidebar.classList.remove("active")
        sidebarToggle.setAttribute("aria-expanded", "false")
      }
    })
  }

  // Dynamic greeting based on time of day
  const greeting = document.querySelector(".greeting")

  if (greeting) {
    const hour = new Date().getHours()
    let greetingText = "Good "

    if (hour < 12) {
      greetingText += "morning"
    } else if (hour < 18) {
      greetingText += "afternoon"
    } else {
      greetingText += "evening"
    }

    greeting.textContent = ${greetingText}! Here's your financial summary.
  }

  // Simulate loading financial data
  // In a real implementation, this would fetch data from the server
  function simulateDataLoading() {
    const loadingElements = document.querySelectorAll(".loading-placeholder")

    if (loadingElements.length > 0) {
      setTimeout(() => {
        loadingElements.forEach((el) => {
          el.classList.remove("loading-placeholder")
        })
      }, 1500)
    }
  }

  simulateDataLoading()
})