//                                     Function
if(1){
    let i =234;
    console.log(i)
}
function ui(name)
{
    let i = 9;
    console.log(i);
    return `This is a ${name} ui`;
}
console.log(ui("harry"))
const mygreet = function(name, thank='Thank You'){
    let msg = `Happy Birthday ${name} How I wish I could fly to you right now and be with you on this special day of yours. But remember, my good wishes are always there with you. ${thank}!`;
    return msg;
}
// let name = 'SkillF';
// let name2 ='Rohan';
let val = mygreet(name, 'Thanks a lot');
console.log(val);
const myobj = {
    name: "SkillF",
    game: function(){
        return "GTA";
    }
}
console.log(myobj.game())
// arr = ['fruit', 'vegetable', 'furniture'];

// arr.forEach(function(element, index, array) {
//     console.log(element, index)
// });         
//                              Window
console.log(window)
console.log(document)
console.log(window.document)
console.log('This is tut 11');
let a = window.document;
// alert('hello harry');
// a = prompt('This will destroy your computer. Type your name');
// a = confirm('Are you sure you want to delete this page?');
a = window.innerHeight;
a = innerWidth;
a = scrollY;
a = location.toString();
a = window.history;
console.log(a);          
