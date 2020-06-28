//                                               Type conversion 
let myVar;
myVar = String(34);
// console.log(myVar, (typeof myVar));
let booleanVar = String(true);
// console.log(booleanVar, (typeof booleanVar));
let date = String(new Date());
// console.log(date, (typeof date));
let arr =  String([1,2,3,4,5]);
// console.log(arr.length, (typeof arr));
let i = 75;
// console.log(i.toString())
let stri = Number("3434");
stri = Number("343d4");
stri = Number(false);
stri = Number([1,2,3,4,5,6,7,8,9]);
// console.log(stri, (typeof stri));
let number = parseFloat('34.098');
console.log(number.toFixed(2), (typeof number));
//                                                Type coercion
let mystr = Number("698");
let mynum = 34;
console.log(mystr + mynum);
//                                          String and it's function
const name = 'Harry';
const greeting = 'Good Morning';
console.log(greeting + ' ' + name);

let html;
html  = "<h1> this is heading</h1>"+
        "<p> this is My para</p>";

html = html.concat('this', ' str2');
console.log(html);
console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html);
console.log(html[1]);
console.log(html.indexOf('<'));
console.log(html.lastIndexOf('<'));
console.log(html.charAt(3));
console.log(html.endsWith('dsfsdfd'));
console.log(html.includes(' fg'));
console.log(html.substring(1,6));
console.log(html.slice(0, 4))
console.log(html.split('>'));
console.log(html.replace('this', 'it'));
let fruit1 = 'Orange\'';
let fruit2 = 'Apple';
let myHtml = `Hello ${name}
            <h1> This is "my" heading </h1>
            <p> You like ${fruit1} and ${fruit2}`;
document.body.innerHTML = myHtml;   
//                             lets discuss about arrays
let marks = [34, 23, 24, 93 ,73, 25];
const fruits = ['Orange', 'Apple', 'Pineapple'];
const mixed = ['str', 89, [3, 5]];
const arr1= new Array(23,123,21, 'Orange');
// console.log(marks);
// console.log(mixed);
console.log(fruits[1]);
console.log(arr1.length);
console.log(Array.isArray('dfdf'));
arr1[0] = 'harry';
let arrelement = arr1[0];
console.log('element :', arrelement);
console.log(arr1);

let value = marks.indexOf(73);
console.log(value)

// Mutating or Modifying arrays
marks.push(3564);
marks.unshift(1009);
marks.pop()
marks.shift()
marks.splice(2, 3);
marks.reverse()
let marks2 = [1, 2,3, 7]
marks = marks.concat(marks2);
console.log(marks);
let myobj = {
    'first name': 'harry', 
    channel: 'CodeWithHarry',
    isActive: true,
    marks: [1,5,3,6]
}
console.log(myobj)
console.log(myobj['channel'])
console.log(myobj.channel)