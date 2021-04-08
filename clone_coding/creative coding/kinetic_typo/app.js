import {Visual} from './visual.js';

class App{
    constructor(){
        this.canvas=document.createElement('canvas');
        document.body.appendChild(this.canvas);
        this.ctx=this.canvas.getContext('2d');

        this.pixelRatio=window.devicePixelRatio>1?2:1;

        WebFont.load({
            google: {
              families: ['Hind:700']
            },
            fontactive:()=>{
                this.visual=new Visual();

                window.addEventListener('resize',this.resize.bind(this),false);
                this.resize();

                requestAnimationFrame(this.animate.bind(this));

            }
          });
    }

    resize(){
        this.stageWidth=document.body.clientWidth;
        this.stageHeigth=document.body.clientHeight;
        
        this.canvas.width=this.stageWidth*this.pixelRatio;
        this.canvas.height=this.stageHeigth*this.pixelRatio;
        this.canvas.style.width=this.stageWidth*this.pixelRatio+'px';
        this.canvas.style.height=this.stageHeigth*this.pixelRatio+'px';

        this.ctx.scale(this.pixelRatio,this.pixelRatio);
        this.ctx.lineCap='round';
        this.ctx.lineWidth=4;

        this.visual.show(this.stageWidth,this.stageHeigth);
    }


    animate(){
        requestAnimationFrame(this.animate.bind(this));

        this.ctx.clearRect(0,0,this.stageWidth,this.stageHeigth);

        this.visual.animate(this.ctx);
    }
}

window.onload=()=>{
    new App();
};