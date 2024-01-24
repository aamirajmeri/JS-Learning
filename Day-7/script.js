let myString = "india is great"; //for of
const books = {
    name : "Atomic habit",
    author : "james clears",
    pages : 175,
    price : 379,
    isAvailable : true,
}; //for in

let arrStudentMarks = [75, 80 , 92 , 100 , 25]; // for of


for(let elements of arrStudentMarks){
    console.log(elements);
}

for(let letter of myString){
    console.log(letter);
    
}

for(let key in books)
{
    console.log(key,books[key]);
    
}



let myName = "Aamir";
console.log(myName);

let yourName = "    Ahesan    ali    ";
let yourSurname = "Kadiwala";
console.log(yourName.concat(yourSurname));
console.log(yourName.length,yourSurname.length);

console.log(yourName.toUpperCase(),yourSurname.toLowerCase());
console.log(yourName.trim());
console.log(yourName.replace("ali","husain"));
console.log(yourName.charAt[4]);

console.log(yourName.slice(2,5));

// let userName = prompt("Enter you Username");
let userName = "Aamir"
console.log("@", userName, userName.length);
console.log("@".concat(userName,userName.length));


let arrBooks = ["Atomic habit","You can Win","Rich Dad Poor Dad"];
let arrMarks = [34,45,56,67,88];
let arrHeroes = ["Captain America","Ironman","Hulk","Superman"];

console.log(arrBooks);
console.log(arrBooks.length);
arrBooks.push("Mybook");
arrBooks.push("Python");
arrBooks.unshift("JS");

for(let i = 0; i<arrBooks.length; i++){
    console.log(arrBooks[i]);
}
arrBooks.pop();
arrBooks.shift();
for(let i=0; i<arrBooks.length; i++)
{
    console.log(arrBooks[i]);
}

let arrMarks1 = [85,97,44,37,76,60];
let sum = 0;

for(let i=0; i<arrMarks1.length; i++){
    sum = sum + arrMarks1[i];
}

console.log(sum / arrMarks1.length);


