const btnaddEl = document.querySelector(".btn-add");
const cardCountEl =document.querySelector(".card-number");
 console.log(cardCountEl.textContent);

 let totalProduct = 0;
btnaddEl.addEventListener("click",()=>{
    totalProduct++;
    cardCountEl.textContent = totalProduct;   
})
 
