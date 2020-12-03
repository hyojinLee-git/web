const express = require('express')
const app = express()
const port = 3000
var fs = require('fs');
var template=require('./lib/template.js');
var sanitizeHtml=require('sanitize-html');
var qs=require('querystring');

//routing: 방향을 잡는것, path에 따라 적절한 응답을 주는것
app.get('/', (request, response) => {
  fs.readdir('./data',function(err,filelist){
    var title='Welcome';
    var description='Hello,Node.js';
    var list=template.list(filelist);
    var html=template.HTML(title,list,
      `<h2>${title}</h2>
      <p>${description}</p>
      `,`<a href ="/create">creat</a>`)
    response.send(html);
  });
});

app.get('/page/:pageId', (request, response) => {
  fs.readdir('./data',function(err,filelist){
    fs.readFile(`data/${request.params.pageId}`,'utf-8',function(err,description){
      var title=request.params.pageId;
      var sanitizedTitle=sanitizeHtml(title);
      var sanitizedDescription=sanitizeHtml(description);
      var list=template.list(filelist);
      var html=template.HTML(title,list,
        `<h2>${sanitizedTitle}</h2>
        <p>${sanitizedDescription}</p>`,
        `<a href ="/create">creat</a> 
        <a href="/update/${sanitizedTitle}">update</a>
        <form action="/delete_process" method="post">
          <input type='hidden' name="id" value="${sanitizedTitle}">
          <input type="submit" value="delete">
        </form>`)
      response.send(html);
    });
  });
});

app.get('/create', (request, response) => {
  fs.readdir('./data',function(err,filelist){
    var title='WEB-create';       
    var list=template.list(filelist);
    var html=template.HTML(title,list,
      `<form action="/create_process" method="post"> 
        <p><input type='text' name="title" placeholder='title'></p>
        <p>
            <textarea name="description" placeholder='description'></textarea>
        </p>
        <p>
            <input type="submit">
        </p>
      </form>
      `,``)
    response.send(html);
  });
});
app.post('/create_process', (request, response) => {
  var body='';
  //많은 양의 데이터를 대비하여 사용
  request.on('data',function(data){
    body=body+data;
  });
  //정보수신 끝을 알림
  request.on('end',function(){
    var post=qs.parse(body);
    var title=post.title
    var description=post.description
    fs.writeFile(`data/${title}`,description,'utf-8',function(err){
      
      response.redirect(`/?id=${title}`);
    });
  });
});
app.get('/update/:pageId', (request, response) => {
  fs.readdir('./data',function(err,filelist){
    fs.readFile(`data/${request.params.pageId}`,'utf-8',function(err,description){
      var title=request.params.pageId;
      var list=template.list(filelist);
      var html=template.HTML(title,list,
        `<form action="/update_process" method="post"> 
        <input type="hidden" name="id" value="${title}">
        <p><input type='text' name="title" placeholder='title' value="${title}"></p>
        <p>
            <textarea name="description" placeholder='description'>${description}</textarea>
        </p>
        <p>
            <input type="submit">
        </p>
    </form>`,
        `<a href ="/create">creat</a> <a href="/update?id=${title}">update</a>`)
      response.send(html);
    });
  });
});
app.post('/update_process', (request, response) => {
  var body='';
  request.on('data',function(data){
    body=body+data;
  });
  request.on('end',function(){
    var post=qs.parse(body);
    var id=post.id;
    var title=post.title;
    var description=post.description;
    fs.rename(`data/${id}`,`data/${title}`,function(err){
      fs.writeFile(`data/${title}`,description,'utf-8',function(err){
      
        response.redirect(`/?id=${title}`);
      })
    })
  });
});
app.post('/delete_process', (request, response) => {
  var body='';
      request.on('data',function(data){
        body=body+data;
      });
      request.on('end',function(){
        var post=qs.parse(body);
        var id=post.id;
        fs.unlink(`data/${id}`,function(error){
          
          response.redirect('/')
        })
      });
});

app.listen(port, () => {})