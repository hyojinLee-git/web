const readline=require('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

const {getSquareArea ,getCircleArea}=require('./mathUtil');
const {logInput, logResult, logFigureError}=require('./log');

rl.question(
    '넓이를 구하고자 하는 도형의 종류를 입력해주세요.(정사각형/원):',
    figure=>{
        console.log(logInput(figure));

        switch(figure){
            case '정사각형':
                rl.question('변의 길이를 입력해주세요:', input=>{
                    console.log(logResult(figure,getSquareArea(input)))
                    rl.close();
                });
                break;
            case '원':
                rl.question('반지름의 길이를 입력해주세요: ', input=>{
                    console.log(logResult(input,input*input*3.14));
                    rl.close();
                });
                break;
            default:
                console.log(logFigureError);
                rl.close();
            
        }
    }
)