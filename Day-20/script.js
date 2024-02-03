
const paraEl = document.querySelector(".para");

const btnAddEl = document.querySelector("#btnAdd");
const btnSubEl = document.querySelector("#btnSub");

let sum = 0;

btnAddEl.addEventListener("click",() => {
    sum = sum + 1;
    paraEl.innerHTML = sum;
})

btnSubEl.addEventListener("click",() => {
    sum = sum - 1;
    paraEl.innerHTML = sum;
})