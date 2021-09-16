


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


var temp = document.querySelector(".weather");



// Open a new connection, using the GET request on the URL endpoint
fetch('https://api.openweathermap.org/data/2.5/weather?q=Kenosha,USA&units=imperial&APPID=cec9d783d36266617f62ffeb94577b05')
.then(response => response.json())
.then(data => {
    
    console.log(data);
    var tempValue = data['main']['temp'];
    var descValue = data['weather'][0]['description'];
    
    console.log(descValue);
    

    temp.innerHTML = Math.round(tempValue)  + " " + "degrees";

    if( descValue === "clear sky" ){
        
        document.body.style.backgroundImage = "url('/images/moon.jpg')";
    } else {
        document.body.style.backgroundImage = "url('ivbjio8-cool-wolf-backgrounds.jpg')"
    }


    
});















