const imageEl = document.querySelector(".dice-image");

const btnEl = document.querySelector(".btn");

const scoreEl = document.querySelector(".score-num");

let sum = 0

btnEl.addEventListener("click" , () =>{
    let radNumber = Math.floor(Math.random()*6+1);
    sum = sum + radNumber;

    console.log(radNumber);
    
    // imageEl.setAttribute("src","D"+ radNumber + ".png");
    imageEl.setAttribute("src",`D${radNumber}.png`);

    scoreEl.innerHTML = sum;
} )



