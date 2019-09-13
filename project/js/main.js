$(document).ready(function(){
  getWeather();
})
/* for constant display inititilly*/
function getWeather(){
  var url = "https://api.openweathermap.org/data/2.5/weather?q=Nagpur&units=metric&APPID="+apiKey;

  $(".city").text(""); //to clean the output on page
  $(".temp").text("");

  $.ajax(url,{success: function(data){
    console.log(data);//to show response on console
    
    $(".city").text(data.name);
    $(".temp").text(data.main.temp+" Celcius");
    $(".humid").text(data.main.humidity+" % Humidity Today");
  }})
}



function getWeatherbySearch(searchQuery){
  var url = "https://api.openweathermap.org/data/2.5/weather?q="+searchQuery+"&units=metric&APPID="+apiKey;
  
  $(".city").text(""); //to clean the output on page
  $(".temp").text("");
  $(".error-message").text("")
  $(".humid").text("")

  $.ajax(url,{success: function(data){
    console.log(data);//to show response on console
    
    $(".city").text(data.name);
    $(".temp").text(data.main.temp+" Celcius");
    $(".humid").text(data.main.humidity+" % HumidityToday");
  }, error: function(error){

    $(".error-message").text("oh oh,City not found..!")
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