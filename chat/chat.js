function sendsms(){
var message1=document.getElementById('message').value;
var message2=document.getElementById('message2').value;
var element=document.createElement('li');
//console.log(element);

if(message1 != ""){
    text1=document.createTextNode(message1);
    element.appendChild(text1);
    var mydiv=document.getElementById('mydiv');
    //console.log(mydiv);
    mydiv.appendChild(element);
    element.style.color ="blue";
    document.getElementById('message').value="";

}

else if(message2 != ""){
    text2=document.createTextNode(message2);
    element.appendChild(text2);
    var mydiv=document.getElementById('mydiv');
    mydiv.appendChild(element);
    element.style.color='red';
    element.style.textAlign="right";
    document.getElementById('message2').value="";
}
}
