//Objects
const user ={
    name: "Aman",
    course: "BCA",
    location: "LKO"
}
console.log(user.name)
//Insert object value
user.aadhar = 1234;
console.log(user)
user.location = "UK" //Update Object
// delete user.location; //Delete Object
console.log(user);

//Print only Keys
console.log(Object.keys(user));

//print only values
console.log(Object.values(user));

//Print both keys and values
console.log(Object.entries(user))

// Destructure Object
const {name, location} = user
console.log(name, location);
