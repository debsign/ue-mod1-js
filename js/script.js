// First step: get city from input and their data
function getCity() {
    var city = document.getElementById('city').value;
    var CITY_API_URL = `https://geocoding-api.open-meteo.com/v1/search?name=${city}`;
    // GET (Request).
    fetch(CITY_API_URL)
    // Success
    .then(response => response.json()) // to JSON
    .then(result => getPrediction(result)) // call to function sending result
    .catch(err => {
        console.log('Solicitud fallida',err);
        document.querySelector('#errorresults').classList.add('show');
        document.querySelector('#results').classList.remove('show');

     }) // Catch errors
}

// Second step: from city data, get json with prediction from seven days
function getPrediction(myJSON) {
    var lat = myJSON.results[0]['latitude'];
    var lon = myJSON.results[0]['longitude'];
    var timezone = myJSON.results[0]['timezone'];
    var WEATHER_API_URL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min,rain_sum,windspeed_10m_max`;
    // GET (Request).
    fetch(WEATHER_API_URL)
    // Success
    .then(response => response.json()) // to JSON
    .then(result => getVars(result)) // call to function sending result
    .catch(err => console.log('Solicitud fallida', err)) // Catch errors
}

// Last step: process prediction and display data on the front
function getVars(myJSON) {
    var city = document.getElementById('city').value;
    // Clean if we got error and then a succesful search
    document.querySelector('#errorresults').classList.remove('show');
    document.querySelector('#results').classList.add('show');
    // Get daily from obj (our core data)
    const data = myJSON.daily;
    var HTML = ``;

    // To get length from an object: Object.keys(obj).length
    for (let index = 0; index <= Object.keys(data).length; index++) {
        const weather = data;
        HTML += `
        <div class="card">
            <p class="date">${weather.time[index]}</p>
            <div class="weather__img img${weather.weathercode[index]}"></div>
            <div class="temperature">
                <div class="temperature__min">${weather.temperature_2m_min[index]}º</div>
                <div style="padding-inline: 4px;">/</div>
                <div class="temperature__max">${weather.temperature_2m_max[index]}º</div>
            </div>
            <div class="rain">
                <p>Lluvia:</p><p class="rain__value">${weather.rain_sum[index]}</p><p>mm</p>
            </div>
            <div class="wind">
                <p>Viento:</p><p class="wind__value">${weather.windspeed_10m_max[index]}</p><p>km/h</p>
            </div>
        </div>
        `;
    }
    document.querySelector(".content").innerHTML = HTML;
    document.querySelector(".cityResult").innerHTML = "El tiempo en " + city;
}
