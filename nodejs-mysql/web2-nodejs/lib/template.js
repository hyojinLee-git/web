module.exports={
    HTML: function(title,list,data,body,control){
      return `
      <!doctype html>
      <html>
      <head>
        <title>WEB - ${title}</title>
        <meta charset="utf-8">
        
      </head>
      <body>
        <h1><a href="/">WEB</a></h1>
        <a href="/author">author</a>

        ${list}
        <p>
          <a href=""><</a>
          ${this.pageNumber(data)}
          <a href="">></a>
          
        </p>
        ${control}
        ${body}
      </body>
      </html>
    `
    },list:function(topics){
      var list='<ul>';
      i=0;
      while (i<topics.length){
        list=list+`<li><a href="/?id=${topics[i].id}">${topics[i].title}</a></li>`;
        i+=1;
      }
      list=list+'</ul>';
      return list
    },authorSelect:function(authors,author_id){
      var tag='';
      var i=0;
      while(i<authors.length){
        var selected='';
        if(authors[i].id==author_id){
          selected='selected';
        }
        tag+=`<option value="${authors[i].id}"${selected}>${authors[i].name}</option>`;
        i++;
      }
      return `
        <select name="author">
                  ${tag}
        </select>
      `
  },authorTable:function(authors){
      tag='';
      tag+=`<table>`;
      var i=0;
      while(i<authors.length){
          tag+=`
          <tr>
              <td>${authors[i].name}</td>
              <td>${authors[i].profile}</td>
              <td><a href="/author/update?id=${authors[i].id}">update</a></td>
              <td>
                <form action="/author/delete_process" method="post">
                  <input type="hidden" name="id" value="${authors[i].id}">
                  <input type="submit" value="delete">
                </form>
              </td>
          </tr>`
          i++;
      }
      tag+=`</table>`
      return tag
  }, pageNumber: function(data){   //data=SELECT COUNT(*) FROM topic으로 개수 가져오기
      if (data%5==0){
        number=parseInt(data/5);
      } 
      else{
        number=parseInt(data/5)+1;  //페이지 개수
      }
      list='<a href="/">1</a>';
      for (var i=2;i<=number;i++){
        list+=`
        <a href="/?page=${i}">${i}</a>
        `
      }
      return list
  }
}

  