const btnEl = document.querySelector(".btn-on-off");
const imageEl = document.querySelector(".bulb-img");


btnEl.addEventListener("click",()=>{
    if(btnEl.textContent == "ON"){
        
        imageEl.setAttribute("src","on.png");
        btnEl.textContent = "OFF";
    }
    else if(btnEl.textContent == "OFF"){
        console.log(btnEl.textContent);
        imageEl.setAttribute("src", "off.png");
        btnEl.textContent = "ON";
    }
})