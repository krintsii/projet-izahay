const slide = document.getElementById("slide1");
const btn = document.querySelector(".slide1");

const slider = document.getElementById("slide2");
const butn = document.querySelector(".slide2");

function sliderMiseho(sld, cls) {
    sld.classList.toggle(cls);
}

btn.addEventListener("click", () => {sliderMiseho(slide, "miseho1")});

butn.addEventListener("click", () => {
    sliderMiseho(slider, "miseho2")
});