let sum = 0;

for(i = 1; i<=100; i++)
{
    if(i % 50 == 0){
        sum = sum + i;
    }
   
}

console.log(sum);



// let n = prompt("Enter the Number");
// let sum1 = 0;

// for(let i = 1; i <= n; i++)
// {
//     sum1 = sum1 + i;
// }

// console.log(sum1);



// for(i=1; i<=20; i++)
// {
//     console.log("SalmanKhan ",i);
    
// }

// for(i = 1; i <= 50; i++)
// {
//     if(i % 3 == 0)
//     {
//         console.log("*");
//     }
//      if(i % 5 == 0)
//     {
//         console.log("#");
        
//     }
// 

let n = prompt("Enter the number");

for(i = 1; i <= 10; i++)
{
    console.log(n,"x" , i , "=", n*i );
}