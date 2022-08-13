let searcInput = document.querySelector("#searcInput");
let findBtn = document.querySelector("#findBtn");
let weatherArea = document.querySelector(".weatherArea");

// http://api.weatherapi.com/v1/forecast.json?key=a89b98f24ae049e7a7d133857220106&q=07112&days=7

let weatherDays = [];

async function getWeather(country) {
  let allData = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=a89b98f24ae049e7a7d133857220106&q=${country}&days=7`
  );

  let response = await allData.json();
  
  weatherDays = response
  
  displayWeather()
}

getWeather("Cairo")
searcInput.addEventListener("keyup", (e) => {
  getWeather(e.target.value);
})
findBtn.addEventListener("click", displayWeather)

// adding months and days array to get cuurent day and month 
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const date = new Date();
let monthName = month[date.getMonth()];
let monthNum = date.getDate()
// first day
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let today = weekday[date.getDay()];

function displayWeather() {

    let {condition} = weatherDays.current
    let {forecastday} = weatherDays.forecast

    let todayWeather = `<div class="col-md-4 p-0">
    <div class="alldays">
        <div class="headDate d-flex justify-content-between">
            <p>${today}</p>
            <p>${monthNum} ${monthName}</p>
        </div>
        <div class="weatherContent">
            <h4>${weatherDays.location.name}</h4>
            <div class="dayNightDegree d-flex align-items-center justify-content-between">
                <div class="degree">
                <div><span>${weatherDays.current.temp_c}</span><sup>o</sup><span>C</span></div>
                </div>
                <div class="forecastIcons">
                <img src="${condition.icon}" alt"${condition.text}">
            </div>
        </div>
            <h5>${condition.text}</h5>
            <div class="iconsArea py-2">
                <span><img src="images/icon-umberella.png" alt"umberlla">
                <span>${forecastday[0].day.daily_chance_of_rain}%</span>
                </span>
                <span class="px-1"><img src="images/icon-wind.png" alt"wind">
                <span>${weatherDays.current.wind_kph}km/h</span>
                </span>
                <span><img src="images/icon-compass.png" alt"compass">
                <span>${weatherDays.current.wind_dir}</span>
                </span>
            </div>
        </div>
        </div>
    </div> 

    <div class="col-md-4 p-0">
            <div class="alldays">
                <div class="hDate headDate headMidStyle d-flex justify-content-center">
                    <p>${weekday[new Date(forecastday[1].date).getDay()]}</p>
                </div>
                <div class="weatherContent text-center midStyle">
                    <div class="dayNightDegree d-flex justify-content-center align-items-center flex-column">
                       <div class="forecast">
                       <img src="${forecastday[1].day.condition.icon}" alt"${forecastday[1].day.condition.text}">
                       </div>
                        <div class="specialDegree mt-3">
                        <div><span>${forecastday[1].day.maxtemp_c}</span><sup>o</sup><span>C</span></div>
                        </div>
                        <div class="smallDegree">
                            <span>${forecastday[1].day.mintemp_c}</span><sup>o</sup>
                        </div>
                    </div>
                    <h5>${forecastday[1].day.condition.text}</h5>
                </div>
                </div>
            </div>

            <div class="col-md-4 p-0">
            <div class="alldays">
                <div class="hDate headDate d-flex justify-content-center">
                    <p>${weekday[new Date(forecastday[2].date).getDay()]}</p>
                </div>
                <div class="weatherContent text-center">
                    <div class="dayNightDegree d-flex justify-content-center align-items-center flex-column">
                       <div class="forecast">
                       <img src="${forecastday[2].day.condition.icon}" alt"${forecastday[2].day.condition.text}">
                       </div>
                        <div class="specialDegree mt-3">
                        <div><span>${forecastday[2].day.maxtemp_c}</span><sup>o</sup><span>C</span></div>
                        </div>
                        <div class="smallDegree">
                            <span>${forecastday[2].day.mintemp_c}</span><sup>o</sup>
                        </div>
                    </div>
                    <h5>${forecastday[2].day.condition.text}</h5>
                </div>
                </div>
            </div>`
   

    document.querySelector(".weatherArea").innerHTML = todayWeather;
}


