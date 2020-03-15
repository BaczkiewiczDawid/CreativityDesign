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


const tl = new TimelineMax({onUpdate:updatePercentage});
const controller = new ScrollMagic.Controller();

tl.from(".firstParagraph", 1, {y: 80, opacity: 0});

const scene = new ScrollMagic.Scene({
    triggerElement: ".section",
    triggerHook: "onLeave",
    duration: "100%"
})
    .setPin(".section")
    .setTween(tl)
        .addTo(controller);

function updatePercentage() {
    tl.progress();
}