 $(function() {
    $.getJSON("https://api.ipify.org?format=jsonp&callback=?",
      function(json) {
      	var poruka = "Moja IP adresa: "
        document.getElementById("rezultat").innerHTML= poruka + json.ip;
      }
    );
  });