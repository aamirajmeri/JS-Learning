const h1El = document.querySelector(".primary-heading");

document.addEventListener("keypress",(e) => {
    h1El.innerHTML = e.key;
})