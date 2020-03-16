const home = document.querySelector(".home");
const mobile = document.querySelector(".activity");
const time = document.querySelector(".inspirations");
const content = document.querySelector(".tutorials");

home.addEventListener("click", changeColorHome);
mobile.addEventListener("click", changeColorMobile);
time.addEventListener("click", changeColorTime);
content.addEventListener("click", changeColorContent);

function load() {
    home.classList.add("active");
}

load();

function changeColorHome() {
    home.classList.add("active");
    mobile.classList.remove("active");
    time.classList.remove("active");
    content.classList.remove("active");
}
function changeColorMobile() {
    mobile.classList.add("active");
    home.classList.remove("active");
    time.classList.remove("active");
    content.classList.remove("active");
}
function changeColorTime() {
    time.classList.add("active");
    home.classList.remove("active");
    mobile.classList.remove("active");
    content.classList.remove("active");
}
function changeColorContent() {
    content.classList.add("active");
    home.classList.remove("active");
    time.classList.remove("active");
    mobile.classList.remove("active");
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

tlc.fromTo(".contentHeader", 1, {y: 80, opacity: 0}, {y: 0, opacity: 1})
tlc.fromTo(".paragraphContent", 1, {y: 80, opacity: 0}, {y: 0, opacity: 1}, .5)
tlc.fromTo(".contentImg", 1, {x: 100, opacity: 0}, {x: 0, opacity: 1}, 1)

let sceneThree = new ScrollMagic.Scene({
    triggerElement: ".content",
})

.setTween(tlc).addTo(controller);

mobile.addEventListener("click", () => {
    gsap.to(window, {duration: 1.5, scrollTo: ".section", ease: Power4.easeOut});
});
time.addEventListener("click", () => {
    gsap.to(window, {duration: 2, scrollTo: ".time", ease: Power4.easeOut});
});
content.addEventListener("click", () => {
    gsap.to(window, {duration: 2.5, scrollTo: {y: 2050}, ease: Power4.easeOut});
});

const button = document.querySelector("#buttonOne");

button.addEventListener("click", () => {
    gsap.to(window, {duration: 1.5, scrollTo: ".section", ease: Power4.easeOut});
});