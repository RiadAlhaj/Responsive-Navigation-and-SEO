const toggeleButton = document.getElementsByClassName("toggle-button")[0]
const navbarLinks = document.getElementsByClassName("nav-links")[0]
toggeleButton.addEventListener("click" , () => {
  navbarLinks.classList.toggle("active")
})