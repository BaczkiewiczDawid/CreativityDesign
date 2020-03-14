const home = document.querySelector(".home");
const activity = document.querySelector(".activity");
const inspirations = document.querySelector(".inspirations");
const tutorials = document.querySelector(".tutorials");

home.addEventListener("click", changeColorHome);
activity.addEventListener("click", activityColorHome);
inspirations.addEventListener("click", inspirationsColorHome);
tutorials.addEventListener("click", tutorialsColorHome);

function load() {
    home.classList.add("active");
}
function changeColorHome() {
    home.classList.add("active");
    activity.classList.remove("active");
    inspirations.classList.remove("active");
    tutorials.classList.remove("active");
}