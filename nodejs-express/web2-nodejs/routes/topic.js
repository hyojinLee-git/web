const express = require('express')
//express의 Router method 호출
//Router()는 router리턴
var router=express.Router();   
var fs = require('fs'); 
var sanitizeHtml=require('sanitize-html');
var template=require('../lib/template.js');



router.get('/create', (request, response) => {
  
    var title='WEB-create';       
    var list=template.list(request.list);
    var html=template.HTML(title,list,
      `<form action="/topic/create_process" method="post"> 
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
router.post('/create_process', (request, response) => {

  /* 
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
  }); */

  //use body-parser
  var post=request.body;
  var title=post.title
    var description=post.description
    fs.writeFile(`data/${title}`,description,'utf-8',function(err){
      
      response.redirect(`/topic/${title}`);
    });


});
router.get('/update/:pageId', (request, response) => {
  
    fs.readFile(`data/${request.params.pageId}`,'utf-8',function(err,description){
      var title=request.params.pageId;
      var list=template.list(request.list);
      var html=template.HTML(title,list,
        `<form action="/topic/update_process" method="post"> 
        <input type="hidden" name="id" value="${title}">
        <p><input type='text' name="title" placeholder='title' value="${title}"></p>
        <p>
            <textarea name="description" placeholder='description'>${description}</textarea>
        </p>
        <p>
            <input type="submit">
        </p>
    </form>`,
        `<a href ="/topic/create">creat</a> <a href="/topic/${title}">update</a>`)
      response.send(html);
    });

});
router.post('/update_process', (request, response) => {
  var post=request.body;
  var id=post.id;
  var title=post.title;
  var description=post.description;
  fs.rename(`data/${id}`,`data/${title}`,function(err){
    fs.writeFile(`data/${title}`,description,'utf-8',function(err){
    
      response.redirect(`/topic/${title}`);
    })
  });
});
router.post('/delete_process', (request, response) => {
  var post=request.body;
  var id=post.id;
  fs.unlink(`data/${id}`,function(error){
    response.redirect('/')
  })
});


router.get('/:pageId', (request, response) => {
  fs.readFile(`data/${request.params.pageId}`,'utf-8',function(err,description){
    if(err){
      next(err);
    } else{
    var title=request.params.pageId;
    var sanitizedTitle=sanitizeHtml(title);
    var sanitizedDescription=sanitizeHtml(description);
    var list=template.list(request.list);
    var html=template.HTML(title,list,
      `<h2>${sanitizedTitle}</h2>
      <p>${sanitizedDescription}</p>`,
      `<a href ="/topic/create">creat</a> 
      <a href="/topic/update/${sanitizedTitle}">update</a>
      <form action="/topic/delete_process" method="post">
        <input type='hidden' name="id" value="${sanitizedTitle}">
        <input type="submit" value="delete">
      </form>`)
    response.send(html);
    }
  });
});

module.exports=router;