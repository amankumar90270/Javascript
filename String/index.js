//Create String in Modern Way
// date = 31 
// const str = `My Birthday is on ${date} January`
// console.log(str)

//Access Elements of String
// const str = `Hello You`
// console.log(str.length);
// console.log(str[0], str[1]);

// //in lower,upper case
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

//********** Find specific keyword**********/
// const str = "Hello You Hello"
// console.log(str.indexOf('Hello')) //retrun index of string
// console.log(str.lastIndexOf("Hello")) //return last index of same keyword 

//********** Find specific keyword**********/
// const str = `This is String Lecture`
// console.log(str.slice(2))            // start with index 3 and end with last index
// console.log(str.slice(3,13));           //start from index 3 and end with index 13
// console.log(str.slice(-4, -2))           //start from opposite

// console.log(str.substring(3,8));          //work same like slice but can not define negative index



//********** concatenate(add) Strings**********/
// const a = `Aman`
// const b = `Pal`
// console.log(a+" "+ b);          //return two added string


//********** Replace Keywords in string**********/
// const str = `Hello This is Aman`
// console.log(str.replaceAll("ello","ii"))        //return "Hii This is Aman"


//********** Trim string**********/
// const str = ` Aman  `
// console.log(str.trim());        //return "Aman" instead of " Aman "


//********** Split string**********/
const str= `Aman, Adarsh, Aditya, Rohan`
console.log(str.split(","));