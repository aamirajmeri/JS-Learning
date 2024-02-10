const textCountEl = document.querySelector(".text-count");
const inputTextEl = document.querySelector("#input-text");


inputTextEl.addEventListener("keyup",() => {

    textCountEl.innerHTML = inputTextEl.value.length; 
    
});
