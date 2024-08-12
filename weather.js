var search=document.getElementById("search");
var input_val=document.getElementById("input_val");
var climate=document.getElementById("climate");
var details=document.getElementById("more-details");
var more_details=document.getElementById("more-more-details");

const weather=async(city)=>{
    
    let key=`00ff5679c7f76386d63846772ebab5ed`;
     
    let url=`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city} &appid=${key}`;

    let res=await fetch(url);
    let data= await res.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;

    document.querySelector(".temp").innerHTML=Math.floor(data.main.temp)+"°C";

    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";

    document.querySelector(".speed").innerHTML=data.wind.speed+" km/hr";

    
    if (data.weather[0].main=="Clouds") {
      climate.src='images/cloudy.jpg'
  }
   else if (data.weather[0].main=='Clear') {
      climate.src='images/Clear sky.jpg'
  }
  else if (data.weather[0].main=='Rain') {
      climate.src='images/Rainy.jpg'
  }
  else if (data.weather[0].main=='Drizzle') {
      climate.src='images/low rain.png'
  }
  else if (data.weather[0].main=='Mist') {
      climate.src='images/Mist.jpg'
  }
  else if (data.weather[0].main=='Haze') {
      climate.src='images/Haze.jpg'
  }
  else if (data.weather[0].main=='Smoke') {
   climate.src='images/Clear sky.jpg'
} 

else if (data.weather[0].main=='Fog') {
    climate.src='images/Fog.jpg'
 } 

else if (data.weather[0].main=='Snow') {
   climate.src='images/snowfall.webp'
}

details.style.display="flex";
more_details.style.display="flex";

 }




search.addEventListener("click",()=>{
   weather(input_val.value);
})