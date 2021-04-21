const canvas=document.querySelector('#canvas');
const ctx=canvas.getContext('2d');
const startBtn=document.querySelector('.startBtn');
const stopBtn=document.querySelector('.stopBtn');

ctx.beginPath();
ctx.strokeStyle='#43B9B6';
ctx.lineWidth=30;
ctx.beginPath();
ctx.arc(360,320,290,(Math.PI/180)*270,(Math.PI/180)*(270+360),false);
ctx.stroke();
ctx.closePath();
//위치 조정 필요
ctx.font='150px normal'
ctx.fillText(`00:00`,179,290);
let time=ctx.measureText(`00:00`);
//let text = ctx.measureText('Hello world');
//ctx.font='30px normal'
//ctx.fillText('기사 선정 & 내용 복사 붙여넣기',142,440);
//let context=ctx.measureText('기사 선정 & 내용 복사 붙여넣기');
let degree=0;
timer=setInterval(()=>{
    if(degree<=360){
        
        ctx.strokeStyle='lightgray';
        
        ctx.beginPath();
        
        ctx.arc(360,320,290,(Math.PI/180)*270,(Math.PI/180)*(270+degree),false);
        //캔버스 사이즈 줄여서 그거 고려해줘야 함
        degree++;

        //뭔가 path안끝내고 이어서 계속 그리는게 나을거같은데
        ctx.stroke();

        }
},30)
function startTimer(){ timer }
function stopTimer(){
    clearInterval(timer);
    console.log('stop');
}

startBtn.addEventListener('click',startTimer);
stopBtn.addEventListener('click',stopTimer);
