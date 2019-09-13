$(document).ready(function(){
  getWeather();
})

function getWeather(){
  var url = "https://api.openweathermap.org/data/2.5/weather?q=Nagpur&units=metric&APPID="+apiKey;

  $.ajax(url,{success: function(data){
    console.log(data);//to show response on console
    
    $(".city").text(data.name);
    $(".temp").text(data.main.temp);
  }})
}
function getWeatherbySearch(searchQuery){
  var url = "https://api.openweathermap.org/data/2.5/weather?q="+searchQuery+"&units=metric&APPID="+apiKey;

  $.ajax(url,{success: function(data){
    console.log(data);//to show response on console
    
    $(".city").text(data.name);
    $(".temp").text(data.main.temp);
  }})
}

function searchWeather(){
  var searchQuery = $(".search").val();
  getWeatherbySearch(searchQuery);
}
function showPicture(){
  // use jQuery ($ is shorthand) to find the div on the page and then change the html
  // 'rounded-circle' is a bootstrap thing! Check out more here: http://getbootstrap.com/css/
  $("#image").append('<img class="rounded-circle" src="images/high-five.gif"/>');
  $("p").html("High five! This was my first web app!");

  // jQuery can do a lot of crazy stuff, so make sure to Google around to find out more
  
}