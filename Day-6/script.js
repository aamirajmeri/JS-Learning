let student1 = 75, student2 = 70, student3 = 90;

console.log(student1,student2,student3);

let studentMarks = [75,"Ahesan",90,95,86,"Aamir",100];

console.log(studentMarks);

console.log(studentMarks.length);

// for-in Loop

const student = {
    name : "Aamir",
    rolNo : 88,
    maths : 99,
    science : 75,
    isActive : true,
}

for(let key in student){
   console.log("key is :",key,"value is :",student[key]);
    
}

// for-of loop

let myString = "This is Aamir here";

for(let i in studentMarks){
    console.log(studentMarks[i]);
    
}


const employee = {
    employeeId : 88,
    employeeName : "Aamir",
    employeeSalary : 75000,
    employeeDepartment : "Production",
    employeeDesignation : "SeniorDeveloper",
};

for(let key in employee)
{
    console.log(key,"=",employee[key]);
    
}