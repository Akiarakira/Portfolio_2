const lightMode = document.querySelector("#lightMode");
const defaultMode = document.querySelector("#defaultMode");
const darkMode = document.querySelector("#darkMode");
const bodyElement = document.querySelector("#body");

lightMode.addEventListener("click", function() {
    console.log("click en light mode");
    bodyElement.classList.add("lightMode");
    bodyElement.classList.remove("defaultMode");
    bodyElement.classList.remove("darkMode");
})

defaultMode.addEventListener("click", function() {
    console.log("click en default mode");
    bodyElement.classList.add("defaultMode");
    bodyElement.classList.remove("lightMode");
    bodyElement.classList.remove("darkMode");
})

darkMode.addEventListener("click", function() {
    console.log("click en dark mode");
    bodyElement.classList.add("darkMode");
    bodyElement.classList.remove("lightMode");
    bodyElement.classList.remove("defaultMode");
})