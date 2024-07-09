const btnEl = document.querySelector(".btn-generate");
const backgroundEl = document.querySelector(".main-container")

// hashCode = hashCode.toSubstring(2,8); 
// hashCode = "#" + hashCode;

// console.log(hashCode);

// let mystring = "4793582146";
// console.log(mystring.substring(0,3));


btnEl.addEventListener("click",()=>{
    let hashCode = "#" + Math.random().toString(16).substring(8,8);
    btnEl.innerHTML = hashCode; 
    backgroundEl.style.backgroundColor = hashCode;
})

