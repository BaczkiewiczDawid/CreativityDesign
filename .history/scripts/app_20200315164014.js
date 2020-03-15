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


const tl = new TimelineMax();
const controller = new ScrollMagic.Controller();

tl.fromTo(".manage", 1, {y: 100, opacity: 0}, {y: 0, opacity: 1})


let scene = new ScrollMagic.Scene({
    triggerElement: ".time",
})

.setTween(tl).addTo(controller);

const tla = new TimelineMax();

tla.fromTo(".remember", .5, {y: 100, opacity: 0}, {y: 0, opacity: 1},);
tla.fromTo(".firstParagraph", .5, {y: 100, opacity: 0}, {y: 0, opacity: 1});
tla.fromTo(".secoundParagraph", .5, {y: 100, opacity: 0}, {y: 0, opacity: 1});

let sceneTwo = new ScrollMagic.Scene({
    triggerElement: ".section",
})

.setTween(tla).addTo(controller);
