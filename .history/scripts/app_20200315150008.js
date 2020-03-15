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
load();

function changeColorHome() {
    home.classList.add("active");
    activity.classList.remove("active");
    inspirations.classList.remove("active");
    tutorials.classList.remove("active");
}
function changeColorActivity() {
    activity.classList.add("active");
    home.classList.remove("active");
    inspirations.classList.remove("active");
    tutorials.classList.remove("active");
}
function changeColorInspirations() {
    inspirations.classList.add("active");
    home.classList.remove("active");
    inspirations.classList.remove("active");
    tutorials.classList.remove("active");
}
function changeColorTutorials() {
    tutorials.classList.add("active");
    home.classList.remove("active");
    inspirations.classList.remove("active");
    tutorials.classList.remove("active");
}


const tween = new TimelineLite();

tween.add(
    Tweenlite.fromTo('firstParagraph', 1 {y: -50, opacity: 0}, {y: 0, opacity: 1})
);