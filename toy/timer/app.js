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

