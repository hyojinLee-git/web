function LinksSetColor(color,highlight){
    var alist=document.querySelectorAll('a');
    var i=0;
    while (i<alist.length){
            console.log(alist[i]);
            alist[i].style.color=color;
            document.getElementById('active').style.color=highlight;
            i+=1;
    }
}
var Body={
    setColor:function(color){
        document.querySelector('body').style.color=color;
    },
    setBackgroundColor:function(color){
        document.querySelector('body').style.backgroundColor=color;
    }
}

function nightDayHandler(self){
    if (self.value=='night'){
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value='day';

        LinksSetColor('powderblue','orange');

    }else{
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value='night';

        LinksSetColor('black','red');

    }
}