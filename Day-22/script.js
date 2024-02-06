const btnSoundEL = document.querySelectorAll(".drum");

let tom1Sound = new Audio("tom-1.mp3");
let tom2Sound = new Audio("tom-2.mp3");
let tom3Sound = new Audio("tom-3.mp3");
let tom4Sound = new Audio("tom-4.mp3");
let snareSound = new Audio("snare.mp3");
let kickSound = new Audio("kick-bass.mp3");
let crashSound = new Audio("crash.mp3");

for(let i = 0; i < btnSoundEL.length; i++)
{
    btnSoundEL[i].addEventListener("click",() => {
    playSound(btnSoundEL[i].innerHTML);
    })

    console.log(btnSoundEL[i].innerHTML);   
}
 
document.addEventListener("keypress",(e)=>{
    playSound(e.key.toUpperCase());
    // console.log(e.key);
    
})

function playSound(key)
{
    // console.log(key);
    
    if (key == "W")
    {
        tom1Sound.play();
    }
    if(key == "S")
    {
        tom2Sound.play();
    }
    if(key == "D")
    {
        tom3Sound.play();
    }
    if(key == "F")
    {
        tom4Sound.play();
    }
    if(key == "G")
    {
        snareSound.play();
    }
    if(key == "H")
    {
        crashSound.play();
    }
    if(key == "J")
    {
        kickSound.play();
    }


}