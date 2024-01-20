// let name = prompt("Salam");
// console.log(name);

// let num = prompt("enter a number:");

// if( num % 5 == 0){
//     console.log(num, "is multiple of 5");    
// }else{
//     console.log(num, "is not multiple of 5");
    
// }


// Q2 Find Grades

let score = prompt("Enter Your Score (0-100):");
let grade;

if(score >= 88 && score <=100)
{
    grade = "A";
}
else if (score >= 65 && score <= 85) {
    grade = "B"
}else if (score >= 55 && score <= 60) {
    grade = "C"
}else if (score >= 44 && score <= 54) {
    grade = "D"
}else if (score >= 0 && score <= 43) {
    grade = "F"
}

console.log("according to your score , your grade was : ",grade);




let a = 5;
let b = 3;

console.log("a + b = ",a+b );
console.log("a - b = ",a-b);
console.log("a * b = ",a*b);
console.log("a / b = ",a/b);
console.log("a % b = ",a%b);


let x = 10;
x++;
x = x;
console.log(x);

// && || !

let p = 10;
let q = 5;

console.log(p>q && p==9);
console.log(p==9 || p<q);
console.log(!p>q);



let age = 22;
let isGoodVision = false;

if(age>18 || isGoodVision == true)
{
    console.log("you are eligible for DL ");
    
}

// contional Statements

// let num = 8;

// // if( num % 2 == 0) {
//     console.log("even");    
// }else{
//     console.log("Odd");
// }

//else if

let color = "Black";

if( mode = "dark"){
    color = "black";
}else if ( mode = "red"){
    color = "red";
}else if ( mode = "green"){
    color = "green";
}else{
    color = "white;"
}

console.log(color);

//Ternary Operators 

let result = age>=18 ? "Adult" : "not Adult";      
console.log(result);  
            // OR
/* let age=25;
age  >= 18 ? console.log("adult") : console.log("not adult")*/
 

let age1 = 18;
let gender = "MalelS";

if(age1 >= 18)
{
    console.log("you can vote !");
}
else{
    console.log("abhi tu chota bachha hai !");
}

if(age1 >= 18 )
{
    if(gender == "Male")
    {
        console.log("you are an Adult Male");   
    }
    else
    {
        console.log("you are an Adult Female");
        
    }
}



let havePassport = true;
let isPoliceCase = true;

if(havePassport && !isPoliceCase)
{
    console.log("you are allowed !");
}
else
{
    console.log("you are not allowed");
    
}











