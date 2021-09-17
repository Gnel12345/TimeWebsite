


function startTime(){
var d = new Date();
var n = d.toLocaleTimeString();




var out = document.getElementById('clock');

out.innerHTML = n;
out.style.fontSize = "400%";

setTimeout(startTime, 1000);


console.log(out);
}

startTime();


var k = "/const.env/Key"
var temp = document.querySelector(".weather");



// Open a new connection, using the GET request on the URL endpoint
fetch('https://api.openweathermap.org/data/2.5/weather?q=Kenosha,USA&units=imperial&APPID=' )
.then(response => response.json())
.then(data => {
    
    console.log(data);
    var tempValue = data['main']['temp'];
    var descValue = data['weather'][0]['description'];
    var thehours = new Date().getHours();
    
    console.log(descValue);
   

    temp.innerHTML = Math.round(tempValue)  + " " + "degrees";

    if( descValue === "clear sky" && thehours > 07){
        
        document.body.style.backgroundImage = "url('/images/wolfInTheSun.jpg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    }  if(descValue === "clear sky" && thehours > 18){
        document.body.style.backgroundImage = "url('/images/ivbjio8-cool-wolf-backgrounds.jpg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        document.getElementById("clock").style.color = "yellow";
        document.querySelector(".weather").style.color = "yellow";
    }if(descValue === "Clouds" ){
        document.body.style.backgroundImage = "url('/images/cloudWolf.jpg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        document.getElementById("clock").style.color = "yellow";
        document.querySelector(".weather").style.color = "yellow";

    } if(descValue === "rain"){
        document.body.style.backgroundImage = "url('/images/rainWolf.jpg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        document.getElementById("clock").style.color = "yellow";
        document.querySelector(".weather").style.color = "yellow";
    } if(descValue === "snow"){
        document.body.style.backgroundImage = "url('/images/snow_wolf.jpg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        document.getElementById("clock").style.color = "yellow";
        document.querySelector(".weather").style.color = "yellow";

    }


    
});















