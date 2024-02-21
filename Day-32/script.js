const headingEl = document.querySelector(".heading");
const btnHideEl = document.querySelector(".btn");
const btnUnhideEl = document.querySelector(".btn-unhide");

btnHideEl.addEventListener("click",()=>{
    headingEl.classList.toggle("hide-me");
    if(btnHideEl.textContent == "Hide")
    {
        btnHideEl.textContent = "Unhide";
    }
    else{
        btnHideEl.textContent = "Hide";
    }
})

// btnUnhideEl.addEventListener("click",()=>{
//     headingEl.classList.remove("hide-me");
// })