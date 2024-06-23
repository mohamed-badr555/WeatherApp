var tRow = document.querySelector('#tRow');
var weatherdata = [];
async function weather(city)
{
  var response= await fetch(`https://api.weatherapi.com/v1/forecast.json?key=ebd565e1410d4428874170425241906&q=${city}&days=3`)
  var finalResponse = await response.json();
    weatherdata = finalResponse;
    display ()
};
 weather(`cairo`)

function monthName(){
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const d = new Date();
let name = month[d.getMonth()];
return name;
}

function dayName(x){
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date(x);
let day = weekday[d.getDay()];
return day;
}
function display (){
let box =`
<div class="col-lg-4">
            <div class="items shadow p-3">
              <div class="py-2 border-bottom d-flex justify-content-between"><span>${dayName(weatherdata.forecast.forecastday[0].date)}</span> <span>${weatherdata.forecast.forecastday[0].date.split('-')[2] + monthName()}</span> </div>
              <div class="mt-3 fs-5"><h4>${weatherdata.location.name}</h4></div>
              <div class="d-flex justify-content-between align-items-center py-3">
                <h2 class="fs-1 temp m-0">${weatherdata.current.temp_c}<sup>o</sup>C</h2>
                <div><img src="http://${weatherdata.current.condition.icon}"class='w-100' alt=""></div></div>
              <div> <p>${weatherdata.current.condition.text}</p>
              <i class="fa-solid fa-umbrella"></i><span class="me-lg-1"> 20%</span>
              <i class="fa-solid fa-wind"></i><span class="me-lg-1"> 18km/h</span>
              <i class="fa-solid fa-compass"></i></i><span class="me-lg-1"> East</span>
              </div>    
              
            </div>
          </div>
          <div class="col-lg-4">
            <div class="items shadow p-3 h-100 text-center">
              <div class="py-2 border-bottom"><span>${dayName(weatherdata.forecast.forecastday[1].date)}</span></div>
              <div><img src="http://${weatherdata.forecast.forecastday[1].day.condition.icon}"class='w-25' alt=""></div>
              <div><p class='fs-3'>${weatherdata.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C</p>
              <span>${weatherdata.forecast.forecastday[1].day.mintemp_c}<sup>o</sup> </span></div>
              <span>${weatherdata.forecast.forecastday[1].day.condition.text}</span>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="items shadow p-3 h-100 text-center">
              <div class="py-2 border-bottom"><span>${dayName(weatherdata.forecast.forecastday[2].date)}</span></div>
              <div><img src="http://${weatherdata.forecast.forecastday[2].day.condition.icon}"class='w-25' alt=""></div>
              <div><p class='fs-3'>${weatherdata.forecast.forecastday[2].day.maxtemp_c} <sup>o</sup>C</p>
              <span>${weatherdata.forecast.forecastday[2].day.mintemp_c}<sup>o</sup> </span></div>
              <span>${weatherdata.forecast.forecastday[1].day.condition.text}</span>
            </div>
          </div>


`;
tRow.innerHTML=box;
}
var search = document.getElementById('search')

search.addEventListener('input',(e)=>{
  if(e.target.value.length>=3)
  {
    weather(e.target.value)

  }
})



