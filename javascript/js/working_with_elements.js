//                        Window object
let a = document;
a = document.all;
// a = document.body;
// a = document.forms[0];
// Array.from(a).forEach(function(element){
//     console.log(element);
// })
a = document.links[0];
// use document.images and document.scripts and print the list of images and scripts on an html page
console.log(a);
//                           Selectors
/*
element selectors:
1. Single element selector
2. Multi element selector
*/
// 1. Single element selector
let element = document.getElementById('myfirst');
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
// element.style.color = 'red';
// element.innerText = 'Harry is a good boy';
// element.innerHTML = '<b>Harry is a good boy</b>';
console.log(element);
let sel = document.querySelector('#myfirst');
sel = document.querySelector('.child');
sel = document.querySelector('div');
sel.style.color = 'green';
// console.log(sel)
// 2. Multi element selector
let elems = document.getElementsByClassName('child');
elems = document.getElementsByClassName('container');
elems = document.getElementsByTagName('div');
// console.log(elems)

// for (let index = 0; index < elems.length; index++) {
//     const element = elems[index];
//     console.log(element);
//    element.style.color = 'blue'; 
// }
// Array.from(elems).forEach(element => {
//     console.log(element);
//    element.style.color = 'blue'; 
// });
// console.log(elems[0].getElementsByClassName('child'))
let cont = document.querySelector('.no');
cont = document.querySelector('.container');
let nodeName = cont.childNodes[1].nodeName;
let nodeType = cont.childNodes[1].nodeType;
// console.log(nodeName)
// console.log(nodeType)
// Node types
// 1. Element
// 2. Attribute
// 3. Text Node
// 8. Comment
// 9. document
// 10. docType
// console.log(cont.childNodes);
// console.log(cont.children);
let container = document.querySelector('div.container');
// console.log(container.children[1].children[0].children);
// console.log(container.firstChild);
// console.log(container.firstElementChild);
// console.log(container.lastChild);
// console.log(container.lastElementChild);
// console.log(container.children);
// console.log(container.childElementCount); // Count of child elements
// console.log(container.firstElementChild.parentNode);
// console.log(container.firstElementChild.nextSibling);
// console.log(container.firstElementChild.nextElementSibling);
// console.log(container.firstElementChild.nextElementSibling.nextElementSibling);
//                                             Working with elements
let element1 = document.createElement('li');
let text = document.createTextNode('I am a text node');
element1.appendChild(text)
// Add a class name to the li element
element1.className = 'childul';
element1.id = 'createdLi';
element1.setAttribute('title', 'mytitle');
// element.innerText = '<b>Hello this is created by harry</b>';
// element.innerHTML = '<b>Hello this is created by harry</b>';
let ul = document.querySelector('ul.this');
ul.appendChild(element1);
console.log(ul)
// console.log(element1)
let elem2 = document.createElement('h3');
elem2.id = 'elem2';
elem2.className = 'elem89';
let tnode = document.createTextNode('This is a created node for elem2');
elem2.appendChild(tnode);
element1.replaceWith(elem2);
let myul = document.getElementById('myul');
// console.log(myul)
myul.replaceChild(element1, document.getElementById('fui'));
myul.removeChild(document.getElementById('lui'));
let pr = elem2.hasAttribute('href');
elem2.removeAttribute('id');
elem2.setAttribute('title', 'myelem2title');
console.log(elem2, pr);
