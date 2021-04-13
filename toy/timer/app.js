const time=document.querySelector('.time');
const startbtn=document.querySelector('.startbtn');
const stopbtn=document.querySelector('.stopbtn');



//console.log(min, sec);

function startTimer(){
    timer=setInterval(() => {   //var
        const val=time.innerText.split(':');
        let min=val[0];
        let sec=val[1];
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
        } else if(now_min>=60){
            now_min='00'
        } 
        time.innerText=now_min+':'+now_sec;
    }, 1000);
}
function stopTimer(){
    clearInterval(timer);
    console.log('stop');
}
startbtn.addEventListener('click',startTimer);
stopbtn.addEventListener('click',stopTimer);