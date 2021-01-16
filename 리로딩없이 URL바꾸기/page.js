$(document).ready(function(){
    $(document).on('click','.control nav a',function(event){
        history.pushState(null,null,event.target.href);
        $('article').load(event.target.href+' article>.content');
        event.preventDefault(); //기본동작을 막는다
    })
    $(window).on('popstate',function(event){
        $('article').load(location.href+' article>.content');
    })
    var audio=new Audio('Nitrix - Gone.mp3');
    $(document).on('click','control .player .play', function(event){
        audio.play();
        console.log(event);
    })
    $(document).on('click','control .player .pause', function(event){
        audio.pause();
        console.log('pause');
    })
});