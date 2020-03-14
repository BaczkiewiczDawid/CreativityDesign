const home = document.querySelector("home");

home.addEventListener("click", homeChangeColor);

function homeChangeColor() {
    home.classList.toggle("active")
}