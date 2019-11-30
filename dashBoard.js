var quotes =[];
var count=0;

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
        count=0;
        var cards_container = $('#cards-container');
        cards_container.empty();
        
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
            '            <a href="javascript:void(0)" data-id="' +i+ '" class="blue-text edit-card-button btn-flat wavews-teal waves-effect" >edit</a>\n' +
            '            <a href="javascript:void(0)" data-id="' +i+ '" class="red-text delete-card-button btn-flat waves-effect">delete</a>\n' +
            '        </div>\n' +
            '    </div>\n' +
            '</div>'
        );
         
        }
        document.getElementById('txt').innerHTML="Count NewS For Today "+quotes.length;
        document.getElementById('txt1').innerHTML="Count NewS For Today "+quotes.length;
    }

    
      
    

    $(document).ready(function () {


        renderCards();

        $('.modal').modal();

        //Delete news
        $('#cards-container').on('click','.delete-card-button',function(){
           
        

           let card_id = parseInt($(this).data('id'));
           console.log("mppika card_id:"+card_id);
           for (let i = 0; i < quotes.length; i++) {
               if (i == card_id) {
                   console.log("mppika me i==card_id->"+i+"=="+card_id);
                   quotes.splice(i, 1);
                   M.toast({html: 'Delete Card!'+i,displayLength: 4000});
                   renderCards();
                   break;
                }
               

            }
            //$(this).closest('.card').remove();
            console.log('Delete!');
         });

         //edit news
         $('.container').on('click','.edit-card-button',function(){
             $('#edit-card-modal').modal('open');
            let  card_id =parseInt($(this).data('id'));

            for(let i=0;i<quotes.length;i++){
                if(i==card_id){
                    $('#edit_image_url').val(quotes[i].urlToImage);
                    $('#edit_title').val(quotes[i].title);
                    $('#edit_description').val(quotes[i].description);
                }
                console.log('Edit!');
            }

        });

         $('#edit-card-modal').on('click','#edit-card-button',function(){ 
            let card_id=parseInt($('.edit-card-button').data("id"));

             quotes[card_id].urlToImage=$('#edit_image_url').val();
            quotes[card_id].title=$('#edit_title').val();
            quotes[card_id].description= $('#edit_description').val();

          //  quotes[card_id].title=document.getElementById('#edit_title');
           console.log('Update!');
           M.toast({html: 'Update Succes!',displayLength: 4000});
           renderCards();
      
        

    });
    //add news actions
    $('.nav-wrapper').on('click','#open-add-modal',function(){
        $('#add-card-modal').modal('open');

        console.log("open-add-modal");

    });
    
    $('#add-card-modal').on('click','#add-card-button',function(){
        let card_id=quotes.length;
        
        console.log("quotes.length: "+quotes.length);

        //quotes[card_id].urlToImage = $('#add_image_url').val();
       // quotes[card_id].title = $('#add_title').val();
       // quotes[card_id].description = $('#add_description').val();

        quotes.push({
            sourch:{"id": "bbc-news",
                    "name": "BBC News"
                },
            author: "BBC News",
            title: $('#add_title').val() ,
            description: $('#add_description').val(),
            url: $('#add_url').val(),
            urlToImage: $('#add_image_url').val(),
            publishedAt: "2019-11-15T15:08:59Z",
            content: null
        });
        
        console.log("add-card-button");
        renderCards();
        M.toast({html: 'Add Card!'+i,displayLength: 4000});

    });

    $('.nav-wrapper').on('click','#profil-button',function(){
        console.log("patithike to profil");
    })
       
      
         

       

    });