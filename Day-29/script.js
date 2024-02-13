const btnEl = document.querySelector(".btn1");
const textEl = document.querySelector(".text");
const starEl = document.querySelector(".star");

// textEl.textContent = "<em>Aamir</em>";

let starString = "";



btnEl.addEventListener("click",()=>{

    starString = "";
    let random = Math.floor(Math.random()*10+1);
    for(let i=1; i<=random; i++){
        starString = starString + "⭐";
    }
    starEl.textContent = starString;
    textEl.textContent = random;   
})

