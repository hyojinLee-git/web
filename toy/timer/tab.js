const context=document.querySelector('.context');
const tab=document.querySelectorAll('.circle');
const present_time=document.querySelector('.time');
//import {initTimer, startProgressBar, stopProgressBar} from './circle_progressbar.js';


const text=['A1-30면 읽기','기사 선정 & 내용 복사 붙여넣기','수치화, 인사이트 구분하기','추가조사(자사, 경쟁사, 해외사례)','의견정리','현직자 인터뷰 작성']
const time=['05:00','03:00','05:00','15:00','05:00','05:00']

function init(){
    //initTimer
    context.innerText=text[0];
    present_time.innerText=time[0];
    tab[0].style.background='#43B9B6';
}
init();

//코드 더러워................
function setContext(e){
    const clasName=e.target.getAttribute('class');
    const idx=parseInt(clasName.split(' ')[1]);

    for(let i=0;i<idx;i++){
        context.innerHTML=text[i];
        present_time.innerHTML=time[i];
        tab[i].style.background='#43B9B6';
        //console.log(tab.length-idx)
    }

    for (let i=tab.length;i>idx;--i){
        tab[i-1].style.background='lightgray';
    }
}

init();
//이벤트 리스너 연결
for (let i=0;i<tab.length;i++){
    tab[i].addEventListener('click', setContext);
    //tab[i].addEventListener('click',initTimer);

}
