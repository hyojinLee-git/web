function solution(num){
    if (num>100000000){return -1;}
    num=String(num)
    answer=""
    for(let i=0; i<parseInt(num.length/2);i++){
        answer+=num[i]
        answer+=num[num.length-1-i]
    }
    if (num.length%2==0){return answer}
    else{
        answer+=num[parseInt(num.length/2)]
        return answer
    }
}
console.log(solution(123456))

function solution2(word){
    stack=[]
    word=word.split('');
    for (let i=0;i<word.length;i++){
        if (stack==[]){stack.push(word[i])}
        else{
            if (word[i]=='C' && stack[stack.length-1]=='D'){stack.pop()}
            else if (word[i]=='D' && stack[stack.length-1]=='C'){stack.pop()}
            else if (word[i]=='A' && stack[stack.length-1]=='B'){stack.pop()}
            else if (word[i]=='B' && stack[stack.length-1]=='A'){stack.pop()}
            else{ stack.push(word[i])}
        }
    }
    return stack.toString()
}
console.log(solution2('CCD'))