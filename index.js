window.onload = oppstart;

//Laget en funksjon som henter knappen og gjør klar en funksjon til den//
function oppstart() {
  document.getElementById("btnSjekk").onclick = sjekkVar;


//Laget en funksjon for hva som skal skje når man trykker på knappen//
  function sjekkVar() {
//Sørger for at temperaturutskriften blir nullstilt når et nytt søk skjer//
    document.getElementById("temperatur").innerHTML = "";
//Henter ut byen brukeren har skrevet inn//
    var brukerinput = document.getElementById("txtBy").value;

//Henter ut JSON-dataen og adder på byen brukeren ønsker i URL'en slik at den søker etter nøyaktig den byen//
    $.getJSON("http://api.openweathermap.org/data/2.5/forecast?q=" + brukerinput + "&units=metric&APPID=f24b8cf4b0fed17e80a7cf06fd8b3980",
//Laget en funksjon som henter dataen slik at vi kan jobbe med den//
      function(data) {
//Console.logger dataen slik at jeg kan få oversik over dataen når jeg skal plotte den ut til brukeren//
        console.log(data);

//Laget variabler for alt jeg skal skrive ut. Deretter funnet ut hvor i JSON-dataen akkurat den informasjonen ligger//
        var by = data.city.name;
        var ikon = "https://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png";
        var vaer = data.list[0].weather[0].description;
        var temp = Math.floor(data.list[0].main.temp);

//Laget utskrifter som skal skrive ut dataen til brukeren//
        document.getElementById("byNavn").innerHTML = by;
        $(".ikon").attr("src", ikon);
        document.getElementById("vaer").innerHTML = vaer;
        document.getElementById("temperatur").innerHTML = temp + "&deg;C";
      });
  }
}
