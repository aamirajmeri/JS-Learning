function makeChicken(){
    console.log("Buy 1 kg Chicken");
    console.log("Marinate chicken with spices");
    console.log("Put some oil & spices in a container");
    console.log("Put marinated chicken in container");
    console.log("Put container on flame");
    console.log("Serve chicken");    
}

makeChicken();
makeChicken();

function printNumber(number1,number2){
    console.log(number1,number2);
    
}

printNumber(440,88);

function addNumbers(num1,num2){
    console.log(num1 + num2);
    
}

addNumbers(848,484);



function multiplyNumbers(num1,num2,num3){
    return num1 * num2 * num3;
    
}
let myMulti = multiplyNumbers(2,2,2);

console.log("myMulti = ",myMulti);


// multiplyNumbers(4,2,4);


function addSomething(num1,name){
    console.log(num1 + " " + name);
    
}

addSomething(4,"Ahesanbhai");

function sum(num1,num2){
    return num1 + num2;
}

let mySum = sum(4,5);

console.log(mySum);


const arrowSum = (num1,num2,num3) => {
    return num1 + num2 + num3;
}

let meraSum = arrowSum(2,3,4);

console.log(meraSum);
