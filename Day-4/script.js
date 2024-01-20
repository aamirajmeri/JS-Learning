// for loop

let sum = 0;
for( let i = 1; i <=50; i++)
{
    sum = sum + i;
}

console.log(sum);

for(let i = 1; i <= 100; i++)
{
    if(i % 2 != 0)
    {
        console.log(i);
    }
}

// while loop

let i = 101;
while(i <= 100 ){
    if(i % 2 == 0)
    {
        console.log(i);
    }
    i++; 
}

// Do while
let sum1 = 0;
let j = 101;

do { 
    sum1 = sum1 + j; // 0 + 101 = 101
    j++; // 102 
}while(j <= 100);  

console.log(sum1);

// Home Work

let sumOdd = 0;
let sumEven = 0;

for(i=1; i <= 100; i++)
{
    if(i % 2 == 0)
    {
        sumEven = sumEven + i;
    }
    else
    {
        sumOdd = sumOdd + i;
    }
}

console.log(sumEven,sumOdd);





