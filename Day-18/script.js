const h1El = document.querySelector(".primary-heading");
console.log(h1El);

const imgEl = document.querySelector(".my-image");

const btnEl = document.querySelector("#btn1");
btnEl.addEventListener("click",() => {
    let imgsrc = imgEl.getAttribute("src");
    console.log(imgsrc);
    
    imgEl.setAttribute("src","../img/img1.jpg");

    let radNum = Math.floor(Math.random()*6+1);
    // let radNum = Math.floor(2.786110);
    h1El.innerHTML = radNum;
})

// const btn2El = document.querySelector("#btn2");
// btn2El.addEventListener("click",() => {

//     imgEl.setAttribute("src","../img/img2.jpg");

//     let radNum = Math.floor(Math.random()*5+1);
//     h1E2.innerHTML = radNum;
    
// })