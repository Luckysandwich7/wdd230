// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const currentHum = document.querySelector('#weather-humidity');
//popup variables
const popName = document.querySelector('pop-Name');
const popEvent = document.querySelector('pop-Event');
const popStartDate = document.querySelector('pop-start-date');
const popEndDate = document.querySelector('pop-end-date');
const popDesc = document.querySelector('pop-desc');
const popTags = document.querySelector('pop-tags');

const url = `https://api.openweathermap.org/data/2.5/onecall?lat=40.42594881179754&lon=-111.8755195383611&units=imperial&exclude=minutely,hourly&appid=a099de85e99260a3db382924a0fb5efc`;

apiFetch(url);

async function apiFetch(apiURL) {
    try {
      const response = await fetch(apiURL);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

function displayResults(data) {
  data.daily.forEach((day, i)=>{
    
    const temp = document.querySelector('#temp' + i);

    temp.innerHTML = `<strong>${day.temp.day.toFixed(0)}</strong>`;

    const icon = document.querySelector('#icon' + i);

    const iconSrc = `https://openweathermap.org/img/w/${day.weather[0].icon}.png`;
    const desc = day.weather[0].description;
  
    icon.setAttribute('src', iconSrc);
    icon.setAttribute('alt', desc);

    const captionDesc = document.querySelector('#captionDesc' + i);

    captionDesc.textContent = desc;

    const humidity = document.querySelector('#humidity' + i);

    humidity.innerHTML = `<strong>${day.humidity.toFixed(0)}</strong>`;

  })
}


  //Current Temp is = current.temp *DONE
  //Current humidity is = current.humidity
  //Current condition is = current.weather.description or current.weather.id *DONE


  //Pop up content
  //Alert sender = alerts.sender_name
  //alert name = alerts.event
  //Alert start date = alerts.start
  //Alert end date = alerts.end
  //Alert description = alerts.description
  //Alert tags = alerts.tag