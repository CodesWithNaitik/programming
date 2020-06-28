let mybtn=document.getElementById('mybtn')
let content=document.getElementById('content')
function getdata() {
    url="https://api.github.com/users";
    // url="js/pagal.txt";
    fetch(url).then((response)=>{
        return response.text();
    }).then((data)=>{
        console.log(data)
    })
}
function postdata() {
    url="http://dummy.restapiexample.com/api/v1/create";
    data='{"name":"Naiitk","salary":"123", "age":"32"}'
    params={
        method:'post',
        headers:{
              'Content-Type':'application/json'
        }
    }
    fetch(url,params).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data)
    })
}
postdata()