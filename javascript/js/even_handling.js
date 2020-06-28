console.log("This is tutorial 17 on events");

document.getElementById("heading").addEventListener("click", function(e) {
  let variable;
  console.log("You have clicked the heading");
//   variable = e.target;       // tell html of element
//   variable = e.target.className;
//   variable = Array.from(e.target.classList);

//   variable = e.target.id;
//   variable = e.offsetX;
//   variable = e.offsetY;
//   variable = e.clientX;
  variable = e.clientY;
  console.log(variable);
//   location.href = '//codewithharry.com'
});
console.log('This is tut 18');
// let btn = document.getElementById('btn');
// btn.addEventListener('click', func1);
// // btn.addEventListener('mousedown', func3);
// btn.addEventListener('dblclick', func2);

// function func1(e) {
//     console.log("Thanks", e);
//     e.preventDefault();
// }

// function func2(e) {
//     console.log("Thanks its a double click", e);
//     e.preventDefault();
// }

// function func3(e) {
//     console.log("Thanks its a mouse down ", e);
//     e.preventDefault();
// }
// document.querySelector('.no').addEventListener('mouseenter', function(){


//     console.log('You entered no')
// })

// document.querySelector('.no').addEventListener('mouseleave', function(){
//     console.log('You exited no')
// })

document.querySelector('.container').addEventListener('mousemove', function(e){
    console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetX},154)`;
    console.log('You triggered mouse move event')
})
//                                MAth Object
let x = 3;
let y = 6;
let z;
z = x+y;
z = x-y;
z = x*y;
z = x/y;

// Exploring the Math object
z = Math;
z = Math.PI;
z = Math.E;
z = Math.round(5.4);
z = Math.ceil(5.3);
z = Math.floor(-5.3);
z = Math.abs(5);
z = Math.sqrt(64);
z = Math.pow(2, 3);
z = Math.min(2, 3, 34,234, 2342,34);
z = Math.max(2, 3, 34,234,34);
z = Math.random();
z = 100*Math.random()
z = Math.ceil(50 + (100-50)*Math.random())
// a = (0, 1)
// a100 = a*100 = (0, 100)
// a10_100 = 10+a*(100 - 10)

console.log(z);

// 3
// 2.8
// 2
// 1
// 0
// -1
// -2
// -2.7
// -3
 

