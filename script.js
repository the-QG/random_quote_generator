var colors = [
    "#542733",
    "#5A6A62",
    "#28ABE3",
    "#5E412F",
    "#354458",
    "#260126",
    "#20457C",
    "#20457C",
    "#FB6648",
    "#4AAAA5",
    "#60047A",
    "#EC1559",
    "#E300FF",
    "#FD7102"
    ]
$.ajaxSetup({
async: false
});
function getQuote(){
    $.getJSON("quotes.json", function(json){
      randomNumber = Math.floor(Math.random()*json.length);
         $.each(json, function(i, object){      
            if (i == randomNumber){
                $("#text").animate({opacity:0}, "slow", function(){
                    $("#text").html('"' + object.quote + '"' + "<br>" + object.author);                
                $("#text").animate({opacity:1}, "slow"); 
                $("#myDiv").css("color", colors[Math.floor(Math.random()*colors.length)]);
                });
                
                }
                
        }); 
    });
};


$(document).ready(function(){
    getQuote();      
});

$("button").click(function(){
    getQuote();
    
});

$("#tweet").click(function(){
    $("#tweet-text").attr("href", "http://twitter.com/home/?status=" + $("#myDiv").text());
});








