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
  $("p").html("High five! This was my first web app!Click click click for infinite puppies");

  // jQuery can do a lot of crazy stuff, so make sure to Google around to find out more
  
}

function handleSignIn(){
  var provider = new firebase.auth.GoogleAuthProvider();
  
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
    console.log(user.email);
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}

function addMessage(postTitle,postBody){
  var postData  = {
    title: postTitle,
    body: postBody
  }

  var database = firebase.database().ref("posts");
  console.log(database);
  var newPostRef = database.push();
  newPostRef.set(postData);
  console.log(newPostRef);
}

function handleMessageFormSubmit(){
  var postTitle = $("#post-title").val();
  var postBody = $("#post-body").val();
  //console.log(postTitle)
  addMessage(postTitle,postBody);

}