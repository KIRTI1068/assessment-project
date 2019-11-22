

$(document).on("click","#gitbtn",function(){
    location.replace('GithubList/app.html');
})

$(document).on("click","#newbtn",function(){
    location.replace('news.html');
})

$(document).on("click","#counbtn",function(){
    location.replace('GithubSearch/app.html');
})

$(document).on("click","#factbtn",function(){
    location.replace('Facts.html');
})


$(window).on('load',function(){
        $('#myModal').modal('show');
    
    var name=JSON.parse(localStorage.getItem("Name"));
    $('#details').html($('#details').html()+" <i>"+name+"</i>, What would you like to do Today?");
        var url='https://newsapi.org/v2/top-headlines?country=in&apiKey=488ec82c94a843358bcddba9202ff45b';
     $.get(url,function(resp){
         

         for(var i=1;i<=2;i++)
    {
        var imgid='loading'+i;
        document.getElementById(imgid).style.display='none';
        var appendto='#news'+i;
        console.log(appendto);
        $(appendto).append(
        `<div class="card " style="width: 18rem;height:25rem">
<h3>Headline ${i}</h3>
                <img src=${resp.articles[i].urlToImage} class="card-img-top">
                    <div class="card-body">
                        <p class="card-text">${resp.articles[i].title}</p>
                        <a href=${resp.articles[i].url} class="btn btn-primary">Read</a>
                    </div>
                </div>
            </div>
        `
        )
    }
         
           
     })
    });
