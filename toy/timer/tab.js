const context=document.querySelector('.context');
const tab=document.querySelectorAll('.circle');
//console.log(tab)

const text=['a1-30면 읽기','기사 선정 & 내용 복사 붙여넣기','수치화, 인사이트 구분하기','추가조사(자사, 경쟁사, 해외사례)','의견정리','현직자 인터뷰 작성']

//코드 더러워................
function setContext(e){
    const clasName=e.target.getAttribute('class');
    const idx=parseInt(clasName.split(' ')[1]);
    console.log(idx);
    for(let i=0;i<idx;i++){
        context.innerHTML=text[i];
    }
}

//이벤트 리스너 연결
for (let i=0;i<tab.length;i++){
    tab[i].addEventListener('click', setContext);

}
