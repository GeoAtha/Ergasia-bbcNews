var quotes =[];

//Get Json Api From BBC News
var url = 'https://newsapi.org/v2/top-headlines?' +
          'sources=bbc-news&' +
          'apiKey=363f7fa794454a9a93cf11a70f462dbe';
var req = new Request(url);
fetch(req)
    .then(function (res){
        return res.json();
    })
    .then(function (data){
        
        quotes = data.articles;
        renderCards();
        console.log(quotes);
    });

    function renderCards(){
        // document.getElementById('#cards-container');

        var cards_container = $('#cards-container');
        cards_container.empty();
        var count=0;
        for(let i =0 ; i<quotes.length;i++){
            cards_container.append(''+
            '<div class="col s6 m6 l6">\n'+
            '   <div class="card large">\n'+
            '       <div class="card-image">\n'+
            '           <a href="'+quotes[i].url+'"><img src="' + quotes[i].urlToImage + '" alt=""></a>\n'+
            '            <a href="'+quotes[i].url+'"> <span class="card-title">' + quotes[i].title + '</span></a>\n' +
            '        </div>\n' +
            '        <div class="card-content">\n' +
            '            <p>' + quotes[i].description + '</p>\n' +
            '        </div>\n' +
            '        <div class="card-action center-align">\n' +
            '              <a href="'+quotes[i].url+'">Read More On BBC</a>\n'+
            '        </div>\n' +
            '    </div>\n' +
            '</div>'
        );
         count++;
        }
        document.getElementById('txt').innerHTML="Count NewS For Today "+count;
        document.getElementById('txt1').innerHTML="Count NewS For Today "+count;
    }

    $(document).ready(function () {

        renderCards();



    });