//                              Basic
console.time('Your code Took');
console.log('Hello console');
console.log(4+34);
console.log(34);
console.log(true);
console.log([34,2,1,2]);
console.log({harry: 'this', marks:34});
console.table({harry: 'this', marks:34});
console.warn('This is a warning');
// console.clear();
console.timeEnd('Your code Took');
console.assert(566<189, 'Age >189 is not possible')
console.error('This is an error')

/*
this
is a
multiline comment
*///                         var, let, const
var name = 'harry';
var channel;
var marks = 3454;
marks = 0;
channel = 'CodeWithHarry'
console.log(name, channel, marks);
/* // Rules for creating JavaScript Variables
1. Cannot start with numbers
2. Can start with letter, numbers, _ or $
3. Are case sensitive
*/
var city = 'Delhi';
console.log(city);
const ownersName = 'Hari Ram';
// ownersName = 'Harry'; // Cannot do this (error)
console.log(ownersName);
const fruit = 'Orange';
{
 let city = 'Rampur';   
 city = 'Kolkata';
 console.log(city);
}
console.log(city);
const arr1 = [12,23,12,53, 3];
// arr1.push(45);
console.log(arr1)
//                                  Primitive data types
// String
let name2 = "harry";
console.log("My string is " + name2);
console.log("Data type is " + (typeof name2));

// Numbers
let marks2 = 34.4;
console.log("Data type is " + (typeof marks2));

// Boolean
let isDriver = true;
console.log("Data type is " + (typeof isDriver));

// Null
let nullVar = null;
console.log("Data type is " + (typeof nullVar));

// Undefined
let undef = undefined;
console.log("Data type is " + (typeof undef));

// Reference Data Types

// Arrays
let myarr = [1, 2, 3, 4, false, "string"];
console.log("Data type is " + (typeof myarr));

// Object Literals
let stMarks = {
    harry: 89,
    Shubham: 36,
    Rohan: 34
}
console.log( typeof stMarks);

function findName() {
    console.log("Naitik")
}
console.log( typeof findName);

let date = new Date();
console.log( typeof date);
console.log(date)
findName()
