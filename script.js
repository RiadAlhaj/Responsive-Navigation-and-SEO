const toggeleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("nav-links")[0];
toggeleButton.addEventListener("click" , () => {
  navbarLinks.classList.toggle("active");
});

/*this is a simple explanation of the JavaScript code you might want to know*/

//const toggleButton = document.getElementsByClassName("toggle-button")[0]; 
//This selects the first element in the document with the class name toggle-button and stores it in the variable toggleButton.
//
//
//const navbarLinks = document.getElementsByClassName("nav-links")[0];
//first element in the document with the class name nav-links and stores it in the variable navbarLinks

//
//
//toggleButton.addEventListener("click", () => { navbarLinks.classList.toggle("active") }) This adds a click event listener to the toggleButton element When the button is clicked it toggles the active class on the navbarLinks element which can be used to show or hide the navigation links with CSS.
//
//
//if you like me to make the Hamburger  menu without JavaScript I can do it just with HTML and CSS but I thought would JavaScript would look more professional.

