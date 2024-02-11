const btnAddEl = document.querySelector(".add-button");
const btnSubEl = document.querySelector(".sub-button");
const countEl = document.querySelector(".count");
const btnresetEl = document.querySelector(".reset-button");


let counter = 0;

btnAddEl.addEventListener("click",()=>{
    counter++;
    countEl.innerHTML = counter;
})

btnSubEl.addEventListener("click",()=>{
    counter--;
    countEl.innerHTML = counter;
})

btnresetEl.addEventListener("click",()=>{
    counter=0;
    countEl.innerHTML = counter;
})