/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  arr.map(arr => {
    if (arr.marks > 50) {
      console.log(arr);
    }
  });
}

function PrintStudentsbyForEach() {
  arr.forEach(arr => {
    if(arr.marks>50){
      console.log(arr.name);
    }
  });
}

function addData() {
  let newStudent = { id: 4, name: "susan", age: "20", marks: 45, };
  arr.push(newStudent);
  console.log(arr); 
}

function removeFailedStudent() {
  let failedStudents = arr.filter(arr => arr.marks <= 50);
  console.log(failedStudents); 
}

function concatenateArray() {
  let arr2 = [
    {id:5, name: "james", age: "21", marks: 70},
    {id:6, name: "peter", age: "22", marks: 60},
    {id:7, name: "thor", age: "20", marks: 55},
  ]  
  arr = arr.concat(arr2);
  console.log(arr);
}
