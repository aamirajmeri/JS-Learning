const primaryheadingEl = document.querySelector(".primary-heading");
const btnsEl = document.querySelector("#s");
const btnmEl = document.querySelector("#m");
const btnlEl = document.querySelector("#l");
const btnxlEl = document.querySelector("#xl");
const btnxxlEl = document.querySelector("#xxl");

btnsEl.addEventListener("click",()=>{
    primaryheadingEl.classList.add("small");
    primaryheadingEl.classList.remove("medium");
    primaryheadingEl.classList.remove("large");
    primaryheadingEl.classList.remove("Extra-large");
    primaryheadingEl.classList.remove("XXL");
})

btnmEl.addEventListener("click",()=>{
    primaryheadingEl.removeAttribute("class");
    primaryheadingEl.classList.add("medium");
}) 

btnlEl.addEventListener("click",()=>{
    primaryheadingEl.removeAttribute("class");
    primaryheadingEl.classList.add("large");
})

btnxlEl.addEventListener("click",()=>{
    primaryheadingEl.removeAttribute("class");
    primaryheadingEl.classList.add("Extra-large");
})
btnxxlEl.addEventListener("click",()=>{
    primaryheadingEl.removeAttribute("class");
    primaryheadingEl.classList.add("XXL");
})