const express = require('express');
const router = express.Router();
var template=require('../lib/template.js');

//routing: 방향을 잡는것, path에 따라 적절한 응답을 주는것
//app.get('/',(req,res)=>res.send('hello world'))
router.get('/', (request, response) => {
 
    var title='Welcome';
    var description='Hello,Node.js';
    var list=template.list(request.list);
    var html=template.HTML(title,list,
      `<h2>${title}</h2>
      <p>${description}</p>
      <img src="/coding.jpg" style="width:1200px; display:block;">
      `,`<a href ="/topic/create">creat</a>`)
    response.send(html);
  
  });

  module.exports=router;