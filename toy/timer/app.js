const time=document.querySelector('.time');
const startbtn=document.querySelector('.startbtn');
const stopbtn=document.querySelector('.stopbtn');
const progress=document.querySelector('.now');
const circle=document.querySelector('.progress-circle');

//console.log(min, sec);
function setMinSec(){
    const val=time.innerText.split(':');
    const min=val[0];
    const sec=val[1];
    let now_sec=parseInt(sec,10);
    let now_min=parseInt(min,10);
    now_sec+=1;
    if (now_sec<10){
        now_sec='0'+now_sec.toString();
    }else{
        if (now_sec>=60){
            now_sec='00'
            now_min+=1
        }
        now_sec=now_sec.toString();
        now_min=now_min.toString();
    }
    if(now_min<10){
        now_min='0'+now_min
    } else if(now_min>=10){
        now_min='00'
        clearInterval(timer);
    } 
    time.innerText=`${now_min}:${now_sec}`;
}

//1초당 0.3픽셀
progress.style.width='0px';
let present_width=progress.offsetWidth;
function setProgressBar(){
    present_width+=1
    progress.style.width=present_width+'px';
}

function startTimer(){
    timer=setInterval(() => {
        setMinSec()
        setProgressBar()
    }, 1000);  //var
}
function stopTimer(){
    clearInterval(timer);
}


startbtn.addEventListener('click',startTimer);
stopbtn.addEventListener('click',stopTimer);

var c = document.getElementById('canvas');
var ctx = c.getContext('2d');
ctx.beginPath();
ctx.lineWidth=10;

/* arc(xp,yp,r,start ang,end ang,false|true) */
/* true= 시대반대방향, false = 시계방향 */ 
ctx.arc(100,130,100,(Math.PI/180)*270,(Math.PI/180)*45,false);
ctx.stroke();
ctx.closePath();
ctx.font='100px normal'
ctx.fillText('hello canvas',0,300);
ctx.strokeStyle='#43B9B6';
ctx.beginPath();
ctx.arc(200,450,100,(Math.PI/180)*270,(Math.PI/180)*(270+360),false);
ctx.stroke();
ctx.closePath();


let degree=0;
setInterval(()=>{
    if(degree<360){
    ctx.strokeStyle='lightgray';
    
    ctx.beginPath();
    
    ctx.arc(200,450,100,(Math.PI/180)*270,(Math.PI/180)*(270+degree),false);
    degree++;

    //뭔가 path안끝내고 이어서 계속 그리는게 나을거같은데
    ctx.stroke();
    }
    //console.log(degree)
},30)

ctx.beginPath();
ctx.moveTo(10,800);
ctx.lineTo(30,800);
ctx.stroke();

let now=30;
getLength=(p1,p2)=>{
    const xs=p2.x-p1.x;
    return xs
}
//console.log(getLength({x:500,y:10},{x:510,y:10}));
setInterval(()=>{
    if (now<300){
    ctx.beginPath();
    ctx.moveTo(now,800);
    now++;
    ctx.lineTo(now,800);
    ctx.stroke();
    }

},30);
// setInterval(()=>{
//     console.log('hi')
// },1000)

