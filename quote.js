function changeBGColor() {
var color = 
["#e91640", "#6495ed", "#9c4be7", "#65e765", "#e600e6", "#ff6933", "#99ff99", "#c0bb72", "#66ffff", "#66ccff"];
  var rand = Math.floor(Math.random() * color.length);
  console.log(color[rand]);
    document.getElementsByTagName("body")[0].style.backgroundColor=color[rand];
  document.getElementsByClassName("btn")[0].style.backgroundColor=color[rand];
};

changeBGColor();

$(function() {
  var author = $('#author');
  var text = $('#quote');
  getQuote(author, text);

  $('#newQuote').click(function(event) {
    event.preventDefault();
    changeBGColor();
    getQuote(author, text);
  })
});

var tweet = "";
$('#tweet').click(function() {
    $(this).attr("href", "https://twitter.com/intent/tweet?text=" + tweet);
})

function getQuote(author, text) {

  var forismaticURL = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?"

  $.getJSON(forismaticURL, function(data) {
      text.html(data.quoteText);
    if (data.quoteAuthor) {
      author.html(data.quoteAuthor);
    } else {
      author.html("Anonymous");
    }
    tweet = '"' + data.quoteText + '"' + " - " + data.quoteAuthor;
  });
}
