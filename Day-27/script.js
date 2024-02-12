const labelEl = document.querySelector(".label");
const btnEL = document.querySelectorAll(".btn");

const displayLabel = (letter) =>{
    labelEl.innerHTML = letter;
}

document.addEventListener("keypress",(event)=>{
    // alert(event.key);
    // console.log(event.keyCode);
    if((event.keyCode>=65 && event.keyCode<=90) || (event.keyCode>=97 && event.keyCode<=122)){

    }
    displayLabel(event.keyCode.toString());
        
        // displayLabel(event.key.toUpperCase());

    
});

for(let btnNum in btnEL )
{
    btnEL[btnNum].addEventListener("click", () => {
        displayLabel(btnEL[btnNum].innerHTML.toUpperCase());
    });
}

