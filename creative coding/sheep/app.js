import{
    Hill
} from './hill.js';

class App{
    constructor(){
        this.canvas=document.createElement('canvas');
        this.ctx=this.canvas.getContext("2d");
        document.body.appendChild(this.canvas);

        this.hills=[
            new Hill('#ff4674',1.4,6)
        ];

        window.addEventListener('resize',this.resize.bind(this),false);
        this.resize();

        requestAnimationFrame(this.animate.bind(this));
    }
    //screen size가져오기
    resize(){
        this.stageWidth=document.body.clientWidth;
        this.stageHeight=document.body.clientHeight;

        this.canvas.width=this.stageWidth*2;
        this.canvas.height=this.stageHeight*2;
        this.ctx.scale(2,2);
    }
    //canvas size 2배로 해서 선명한 해상도

    animate(t){

        requestAnimationFrame(this.animate.bind(this));

        this.ctx.clearRect(0,0,this.stageWidth,this.stageHeight);
    }
}

window.onload = () => {
    new App();
}
//캔버스를 깨끗하게 지워줌