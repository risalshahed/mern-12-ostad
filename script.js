function getWeather() {
  const apiKey = '0db8a6f4bb5c81d72f1d7613420c0fab';
  const city = document.getElementById('city').value;

  if(!city) {
    alert('Please Enter a City');
    return;
  }

  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  const foreCastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

  fetch(currentWeatherUrl)
    .then(res => res.json())
    .then(data => displayWeather(data))
    .catch(err => {
      console.error('Error Fetching Data', err);
      alert('Error Fetching Data, Please Try Again');
    })

  fetch(foreCastUrl)
    .then(res => res.json())
    .then(data => displayHourlyForecast(data.list))
    .catch(err => {
      console.error('Error Fetching Hourly Forecast', err);
      alert('Error Fetching Hourly Forecast, Please Try Again');
    })
}

function displayWeather(data) {
  const tempDivInfo = document.getElementById('temp-div');
  const weatherInfoDiv = document.getElementById('weather-info');
  const weatherIcon = document.getElementById('weather-icon');
  const hourlyForecastDiv = document.getElementById('hourly-forecast');

  // Clear Previous Content
  weatherInfoDiv.innerHTML = '';
  hourlyForecastDiv.innerHTML = '';
  tempDivInfo.innerHTML = '';

  console.log('weather data', data);

  if(data.cod === '404') {
    weatherInfoDiv.innerHTML = `<p>${data.message}</p>`
  } else {
    const cityName = data.name;
    // temperature in celsius
    const temperature = Math.round(data.main.temp - 273.15);
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

    const temperatureHTML = `
      <p>${temperature}</p>
    `

    const weatherHTML = `
      <p>${cityName}</p>
      <p>${description}</p>
    `

    tempDivInfo.innerHTML = temperatureHTML;
    weatherInfoDiv.innerHTML = weatherHTML;
    weatherIcon.src = iconUrl;
    weatherIcon.alt = description;

    showImage();
  }
}

function displayHourlyForecast (hourlyData) {
  const hourlyForecastDiv = document.getElementById('hourly-forecast');

  const next24Hours = hourlyData.slice(0, 8);

  next24Hours.forEach(item => {
    const dateTime = new Date(item.dt * 1000);
    const hour = dateTime.getHours();
    const temperature = Math.round(item.main.temp - 273.15);
    const iconCode = item.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

    const hourlyItemHtml = `
      <div id="hourly-item">
        <span>${hour}:00</span>
        <img src="${iconUrl}" alt="Hourly Weather Icon">
        <span>${temperature}°C&nbsp</span>
      </div>
    `;

    hourlyForecastDiv.innerHTML += hourlyItemHtml;
  })
}

function showImage() {
  const weatherIcon = document.getElementById('weather-icon');
  weatherIcon.style.display = 'block';
}