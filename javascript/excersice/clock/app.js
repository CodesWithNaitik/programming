function update(){
    let currentdate=new Date();
    let currenthour=currentdate.getHours();
    let currentsec=currentdate.getSeconds();
    let currentmin=currentdate.getMinutes();
    currentmin=(currentmin<10?"0":"")+currentmin
    currentsec=(currentmin<10?"0":"")+currentsec;
    let timeof=(currenthour<12)? "AM":"PM";
    currenthour=(currenthour>12)?currenthour-12:currenthour;
    currenthour=(currenthour==0)?"12":currenthour;
    let str=currenthour+":"+currentmin+":"+currentsec+":"+""+timeof
    document.getElementById("clock").innerHTML=str
}