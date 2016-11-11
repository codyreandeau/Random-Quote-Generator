function quote () {
$('#quoteGETJSON').on("click", function() {
  $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(json) {
    
        var html = "";
        
    json.forEach(function(val) {});
        $(".message").html(html);
    });
  });
}

function changeBGColor() {
var color = 
["#e91640", "#6495ed", "#9c4be7", "#65e765", "#e600e6", "#ff6933", "#99ff99", "#c0bb72", "#66ffff", "#66ccff"];
  var rand = Math.floor(Math.random() * color.length);
  console.log(color[rand]);
    document.getElementsByTagName("body")[0].style.backgroundColor=color[rand];
};

changeBGColor();