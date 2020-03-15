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

tl.fromTo(".manage", 1, {y: 80, opacity: 0}, {y: 0, opacity: 1})
tl.fromTo(".paragraph", 1, {y: 80, opacity: 0}, {y: 0, opacity: 1}, .5)
tl.fromTo(".clockImg", 1, {x: -80, opacity: 0}, {x: 0, opacity: 1}, 0)


let scene = new ScrollMagic.Scene({
    triggerElement: ".time",
})

.setTween(tl).addTo(controller);

const tla = new TimelineMax();

tla.fromTo(".remember", 1, {y: 80, opacity: 0}, {y: 0, opacity: 1});
tla.fromTo(".firstParagraph", 1, {y: 80, opacity: 0}, {y: 0, opacity: 1}, .5);
tla.fromTo(".secoundParagraph", 1, {y: 80, opacity: 0}, {y: 0, opacity: 1}, .8);
tla.fromTo(".phoneImg", 1, {x: 80, opacity: 0}, {x: 0, opacity: 1}, 0)

let sceneTwo = new ScrollMagic.Scene({
    triggerElement: ".section",
})

.setTween(tla).addTo(controller);


const tlc = new TimelineMax();

tlc.fromTo(".contentHeader", 1, {y: 80, opacity: 0}, {y: 0, opacity: 1},)
tlc.fromTo(".paragraphContent", 1, {y: 80, opacity: 0}, {y: 0, opacity: 1}, .5)
tlc.fromTo(".contentImg", 1, {y: 80, opacity: 0}, {y: 0, opacity: 1}, 0)

let sceneThree = new ScrollMagic.Scene({
    triggerElement: ".content",
})

.setTween(tlc).addTo(controller);