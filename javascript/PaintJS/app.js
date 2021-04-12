const canvas=document.querySelector('#jsCanvas');   
const ctx=canvas.getContext('2d');  //pixel control
const colors=document.querySelectorAll('.jsColor');
const range=document.querySelector('#jsRange');
const mode=document.querySelector('#jsMode');
const save=document.querySelector('#jsSave');

const INITIAL_COLOR='#2c2c2c'
const CANVAS_SIZE=500;

//need pixel manipulating size
canvas.width=CANVAS_SIZE;
canvas.height=CANVAS_SIZE;

ctx.strokeStyle=INITIAL_COLOR;  //color of line
ctx.lineWidth=2.5;

ctx.fillStyle='white'
ctx.fillRect(0,0,canvas.width,canvas.height)    
ctx.fillStyle=INITIAL_COLOR;  //color of fillRect

let painting=false;
let filling=false;

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
function handleColor(event){
    const color=event.target.style.backgroundColor;
    ctx.strokeStyle=color;  //override
    ctx.fillStyle=color;
}
function handleRangeChange(event){
    const size=event.target.value;
    ctx.lineWidth=size;
}
function handleModeClick(){
    if(filling===true){
        filling=false;
        mode.innerText='Fill'
    } else{
        filling=true;
        mode.innerText='Paint'
    }
}
function handleCanvasClick(){
    if (filling){
    ctx.fillRect(0,0,canvas.width,canvas.height)    
    //모서리 둥근부분을 어떻게 채운건지
    }   
}
function handleCM(event){
    event.preventDefault();

}
function handleSaveClick(){
    const image=canvas.toDataURL('image/png');
    const link=document.createElement('a'); //image의 링크 생성
    link.href=image                         //image 링크 할당
    link.download="paintjs image";          //다운로드 이름 설정, 속성 설정시 링크를 다운로드한다.
    link.click();
    console.log(link);
}

if(canvas){
    canvas.addEventListener('mousemove',onMouseMove);
    canvas.addEventListener('mousedown',startPainting);
    canvas.addEventListener('mouseup',stopPainting);
    canvas.addEventListener('mouseleave', stopPainting);
    canvas.addEventListener('click',handleCanvasClick);
    canvas.addEventListener('contextmenu',handleCM);
}

colors.forEach(color=>color.addEventListener('click',handleColor)) //인자이름 상관없

if (range){
    range.addEventListener('input',handleRangeChange);
}

if(mode){
    mode.addEventListener('click',handleModeClick);
}

if(save){
    save.addEventListener('click',handleSaveClick);
}