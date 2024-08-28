// Pass by Value - Pritmitive DataTypes 
// String, boolean, number, null and undefiend
let a = 5;
let b = a;
// console.log(a);
// console.log(b);

// Pass by Reference - Non-Primitive DataTypes
// Objects and Arrays
// Pass by Reference by Object Example
let obj = {
    firstname : "Krishna",
    lastname: "singh"
}
let obj1 = obj;
obj1.lastname = "Kumar";
//console.log(obj1);

// Pass by Reference by Arrays Example
let arr = ["Apple", "Mango"];
let arr1 =  arr.push("Kiwi");
// console.log(arr);
// console.log(arr1);

// Map Method()
// Double - One Way
let num = [2,3,4,6,7,8];
let double = num.map(num=>num * 2);
//console.log(double);

let triple = num.map((num)=>{
    return num *3 ;
})
//console.log(triple);

// Filter Method ()
// Find Even Number
let number = [1,2,3,4,5,6];
let evenNum = number.filter(number => number % 2 ===0);
let output = number.filter((number)=>{
    return number % 2 ===0;
})
//console.log(output);
//console.log(evenNum);

// Mapping an Array of Objects
// Find only User Names
let user = [
    {username : "Krishna", age:7},
    {username : "Rina"},
    {username : "Shayam"}
   
];
//let result = user.map(user => user.username);
let names = user.map((user)=>{
    return user.username;
})
//console.log(names);

//  Using map() to Modify Object Properties

let users = [
    {username : "Krishna", age:37},
    {username : "Rina", age:38},
    {username : "Shayam", age:39}
   
];
let updateUsers = users.map((el)=>({
    username : el.username,
    age : el.age + 1,
}))
console.log(updateUsers);



