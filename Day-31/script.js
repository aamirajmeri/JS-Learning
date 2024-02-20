const textCountEl = document.querySelector(".text-count");
const inputTextEl = document.querySelector("#input-text");
const btnCountEl = document.querySelector(".btn-count");

btnCountEl.addEventListener("click",()=>{
   let inputText = inputTextEl.value.toString().toUpperCase();
   console.log(inputText);
   
   let count = 0;

    for(let i = 0; i<=inputText.length; i++)
    {
        console.log(inputText[i]);

        if(inputText[i] == "A" || inputText[i] == "E" || inputText[i] == "I" || inputText[i] == "O" || inputText[i] == "U"  ){
            count++ ;
        }
        
    }
    console.log(count);
    textCountEl.textContent = count;
})
