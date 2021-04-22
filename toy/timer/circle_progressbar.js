const canvas=document.querySelector('#canvas');
const ctx=canvas.getContext('2d');
const startBtn=document.querySelector('.startBtn');
const stopBtn=document.querySelector('.stopBtn');

function initTimer(){
    ctx.beginPath();
    ctx.strokeStyle='#43B9B6';
    ctx.lineWidth=20;
    ctx.beginPath();
    ctx.arc(360,320,290,(Math.PI/180)*270,(Math.PI/180)*(270+360),false);
    ctx.stroke();
    ctx.closePath();
}
initTimer();
//circle progressbar

function startProgressBar(){ 
    let degree=0;
    circle_timer=setInterval(()=>{
    if(degree<=360){
        
        ctx.strokeStyle='lightgray';
        
        ctx.beginPath();
        
        ctx.arc(360,320,290,(Math.PI/180)*270,(Math.PI/180)*(270+degree),false);
        //캔버스 사이즈 줄여서 그거 고려해줘야 함
        degree+=6/50;

        //뭔가 path안끝내고 이어서 계속 그리는게 나을거같은데
        ctx.stroke();

        }
    },100)
}
function stopProgressBar(){
    clearInterval(circle_timer);
    //console.log('stop');
}

startBtn.addEventListener('click',startProgressBar);
stopBtn.addEventListener('click',stopProgressBar);
