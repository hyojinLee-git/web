const canvas=document.querySelector('#jsCanvas');   
const ctx=canvas.getContext('2d');  //pixel control
const color=document.querySelectorAll('.jsColor');



//need pixel manipulating size
canvas.width=500;
canvas.height=500;

ctx.strokeStyle='#2c2c2c';
ctx.lineWidth=2.5;

let painting=false;

function onMouseMove(event){    //클릭하든지 안하든지 mousemove이벤트는 계속 발생중임
    //get offset: coordinate of canvas
    const x=event.offsetX;  //이거 왜 상수? 변하는 값 아닌가?
    const y=event.offsetY;
    
    if(!painting){          //painting=false일때 
        ctx.beginPath();    //line=path 시작점을 계속 만들고있음
        ctx.moveTo(x,y);
    } else{                 //클릭하면
        ctx.lineTo(x,y);    //시작점부터 끝점까지 라인을 만듦??
        ctx.stroke();
    }
}

function startPainting(){
    painting=true;
}

function stopPainting(){
    painting=false;
}


if(canvas){
    canvas.addEventListener('mousemove',onMouseMove);
    canvas.addEventListener('mousedown',startPainting);
    canvas.addEventListener('mouseup',stopPainting);
    canvas.addEventListener('mouseleave', stopPainting);
}

function changeColor(event){
    console.log(event.target.style);
}

color.addEventListener('click', changeColor);