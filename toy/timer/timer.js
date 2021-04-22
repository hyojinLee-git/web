const number=document.querySelector('.time');
const startbtn=document.querySelector('.startBtn');
const stopbtn=document.querySelector('.stopBtn');

function setMinSec(){
    const val=number.innerText.split(':');
    const min=val[0];
    const sec=val[1];
    let now_sec=parseInt(sec,10);
    let now_min=parseInt(min,10);

    if(now_sec==1 && now_min==0){
        clearInterval(timer);
    }
    
    if (now_sec==0){
        now_sec=60;
        now_min-=1;
    }
    now_sec-=1;
    if(now_sec<10){
        now_sec=`0${now_sec}`;
        
    }
    
    now_sec=now_sec.toString();


    if(now_min<10){
        now_min='0'+now_min
    } 
    number.innerText=`${now_min}:${now_sec}`;

    
}

function startTimer(){ 
    timer=setInterval(() => {   //이거대체뭐지..
        setMinSec()
    }, 1000);
}
function stopTimer(){
    clearInterval(timer);
}

startbtn.addEventListener('click',startTimer);
stopbtn.addEventListener('click',stopTimer);