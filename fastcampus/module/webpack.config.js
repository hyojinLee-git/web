//__dirname, path module

const path=require('path');

module.exports={
    entry:'./src/index.js',     //시작점
    output:{
        path:path.resolve(__dirname,'dist'),    //번들 파일 정보 설정
        filename:'bundle.js'
    },
    target:'node'   //환경 설정
}