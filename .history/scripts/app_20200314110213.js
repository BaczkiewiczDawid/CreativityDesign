const home = document.querySelector(".home");
const activity = document.querySelector(".activity");
const inspirations = document.querySelector(".inspirations");
const tutorials = document.querySelector(".tutorials");

home.addEventListener("click", changeColorHome);
activity.addEventListener("click", changeColorActivity);
inspirations.addEventListener("click", changeColorInspirations);
tutorials.addEventListener("click", changeColorTutorials);

function load() {
    home.classList.add("active");
}