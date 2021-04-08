/*
function a(){
    console.log('A');
}
*/


var a=function(){
    console.log('A');
}

function slowfunc(callback){
    callback();
}



var fs = require('fs');

fs.readdir('../nodejs example', function(err,filelist){
    fs.readFile('../nodejs example/sample.txt',function(err,data){    
        console.log(filelist);
        console.log(data);

});
});

