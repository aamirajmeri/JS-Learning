const h1el = document.getElementById("head1");
const h2el = document.getElementById("head2");
const h3el = document.getElementById("head3");


const btnel1 = document.getElementById("btn1");

btnel1.addEventListener("click",() =>{
    h1el.innerText = "Hyy / Hello Everyone";
    h2el.innerText = "Hello ";
    h3el.innerText = "Hello world";

    h1el.style.color = "red";
    h2el.style.color = "grey";
    h3el.style.color = "maroon";
} )