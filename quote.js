$('#quoteGETJSON').on("click", function() {
  $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(json) {
    
        var html = "";
        
    json.forEach(function(val) {
    
            });
        $(".message").html(html);
    });
  });