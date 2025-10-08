//Create Array

let marks = [100,20,60,89,20]
console.log(marks)  //[ 100, 20, 60, 89, 20 ]

//find length of array
console.log(marks.length); //5

//Can define any type of element 
let arr = [100, "Aman", true, 50]
console.log(arr);  //[ 100, 'Aman', true, 50 ] 

//Access a particular element
console.log(arr[0]); //100
console.log(arr[1]); //5

//Type of Array
console.log(typeof arr); //object

//Change element of array
arr[1] = [90]
console.log(arr); //[ 100, [ 90 ], true, 50 ]

//add new element in last of array (Push Operation )
arr.push(89);
console.log(arr); //[ 100, [ 90 ], true, 50, 89 ]

//Remove element from end (Pop Operation)
arr.pop();
console.log(arr); // [ 100, [ 90 ], true, 50 ]

//Print element of Array
let arr1= [1,8,39,90,30]
for(let i=0; i<arr1.length; i++){
    console.log(arr1[i]);
}

const arr2 = [4,5,292,4,"Aman"]
const arr3 = [2,482,94,"Adarsh"]
const arr4 = arr2.concat(arr3);
console.log(arr4); // Add Arrays 

//Spread  Operator
console.log(...arr2, ...arr3,  ) //Spread Elements of Array

//Array to string convert
const arr5 = ["Alice", "Bob", "Charlie"]
console.log (arr5.toString()) //Return string value
console.log(arr5.join("-")) //join based on input (eg." ", -, * )

//Search Element in Array
console.log(arr5.indexOf("Bob"))

