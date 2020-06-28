async function harry() {
    console.log(`inside array function`);
    const response=await fetch(`https://api.github.com/users`)
    console.log('before response');
    const users = await response.json();
    console.log('user resolved')
    return users;
}
console.log('before calling')
let a=harry()
console.log('aftrer')
console.log(a)
a.then(data=> console.log(data))
//                          Error handling
let ab="harry bhai"
if(ab==undefined){
    throw new Error('This is not defined');
    
}
else{
    console.log('defined')
}
try{
    throw new Error('This is not defined');
    func()
    
}
catch(error){
    console.log(error.name)
    console.log(error.message)
}
finally{
    console.log("happy")
}