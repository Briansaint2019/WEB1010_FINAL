// no API key required for this API
const API_URL = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?'
// Create Variable
var quoteT = document.querySelector('.quote-text');
var quoteA = document.querySelector('.quote-author');
var newquotebtn = document.querySelector('.busted');



function getQuote() {
    $.ajax({
        url: API_URL,
        dataType: 'json',
        success: function (data) {
            console.log(data)
        quoteT.textContent = data.quoteText
        quoteA.textContent = data.quoteAuthor
        
        },
        error: function (error) {
            console.log("There was an error")
        }
    })
}

getQuote()

//event listener

newquotebtn.addEventListener('click', function(e){  

    if(newquotebtn.textContent == "Get New Quote"){
        quoteT.textContent = getQuote(quoteT.textContent)
        quoteA.textContent = getQuote(quoteA.textContent)
    }







})