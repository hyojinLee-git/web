var button=document.getElementById("button");
var input=document.getElementById("input");
var list=document.getElementById("list");

button.addEventListener('click',clickButton); 

function clickButton(){
    var temp=document.createElement('li');
    var temp2=document.createElement('input');
    temp2.setAttribute('type','checkbox');
    temp.innerText=input.value;
    var br=document.createElement('br')

    list.appendChild(temp);
    list.appendChild(temp2)
    list.appendChild(br);
    input.value=null;
}
