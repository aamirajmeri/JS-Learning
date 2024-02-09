const operator1El = document.querySelector("#operator1"); //4
const operator2El = document.querySelector("#operator2"); //5
const companswerEl = document.querySelector("#companswer"); // ??
const scorenumEl = document.querySelector(".score-num");

let userScore = 0;



    
    operator1El.innerHTML = Math.floor(Math.random()*10+1);
    operator2El.innerHTML = Math.floor(Math.random()*10+1);

    console.log(operator1El,operator2El);
    



const answerEl = document.querySelector(".answer");
const btnanswerEl = document.querySelector(".btn-answer");

btnanswerEl.addEventListener("click",()=>{
    if(btnanswerEl.innerHTML == "Submit")
    {    
    const userAnswer = answerEl.value;
    const companswer = Number(operator1El.innerHTML)*Number(operator2El.innerHTML);
    if(userAnswer == companswer )
    {
        userScore++;
        scorenumEl.innerHTML = userScore;    
        btnanswerEl.innerHTML = "Next";
    }
    else{
        userScore--;
        scorenumEl.innerHTML = userScore;
        console.log(userAnswer.innerHTML = userScore);        
        btnanswerEl.innerHTML = "Next";
    }
    companswerEl.innerHTML = companswer;
    }
    else{
        operator1El.innerHTML = Math.floor(Math.random()*10+1);
        operator2El.innerHTML = Math.floor(Math.random()*10+1);
        companswerEl.innerHTML = "??";
        answerEl.value  = null;
        btnanswerEl.innerHTML = "Submit";

    }
})

