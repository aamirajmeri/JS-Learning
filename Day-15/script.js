const h1el = document.getElementById("heading1");

const btn1el = document.getElementById("btn1");

btn1el.addEventListener("click",() => {
    h1el.innerText = "i'm aamir";
    h1el.style.color = "yellow";
})

