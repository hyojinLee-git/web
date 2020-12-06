const express = require('express');
const app = express();  //express는 app 리턴
const port = 3000
var fs = require('fs');
var bodyParser=require('body-parser');
var compression=require('compression');
const { request, response } = require('express');
var topicRouter=require('./routes/topic');
var indexRouter=require('./routes/index');
var helmet=require('helmet');



app.use(helmet());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(compression());
app.get('*',function(request, response, next){  //get방식에서만 동작함
  fs.readdir('./data',function(err,filelist){
    request.list=filelist;
    next();
  });
});

app.use('/topic',topicRouter);
app.use('/',indexRouter);

//routing: 방향을 잡는것, path에 따라 적절한 응답을 주는것
//app.get('/',(req,res)=>res.send('hello world'))



app.use(function(request,response,next){
  response.status(404).send('Sorry cant find that!');
});

app.use(function(err,request,response,next){
  console.error(err.stack)
  response.status(500).send('Something broke!');
});

app.listen(port, () => {})