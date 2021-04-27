const logInput=input=>`입력받은 값: ${input}`;
const logResult=(figure, result)=> `${figure}의 넓이는: ${result}입니다.`;
const logFigureError='정사각형 또는 원을 입력해주세요.';

module.exports={
    logInput,
    logResult,
    logFigureError
}