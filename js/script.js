function getCity() {
    var city = document.getElementById('city').value;
    var CITY_API_URL = `https://geocoding-api.open-meteo.com/v1/search?name=${city}`;
    // GET (Request).
    fetch(CITY_API_URL)
    // Success
    .then(response => response.json()) // to JSON
    .then(result => getPrediction(result)) // save data to a var
    .catch(err => {
        console.log('Solicitud fallida',err);
        document.querySelector('#errorresults').classList.add('show');
        document.querySelector('#results').classList.remove('show');

     }) // Catch errors
}


function getPrediction(myJSON) {
    var lat = myJSON.results[0]['latitude'];
    var lon = myJSON.results[0]['longitude'];
    var timezone = myJSON.results[0]['timezone'];
    var WEATHER_API_URL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min,rain_sum,windspeed_10m_max`;
    // GET (Request).
    fetch(WEATHER_API_URL)
    // Success
    .then(response => response.json()) // to JSON
    .then(result => getVars(result)) // save data to a var
    .catch(err => console.log('Solicitud fallida', err)) // Catch errors
}

function getVars(myJSON) {
    document.querySelector('#errorresults').classList.remove('show');
    document.querySelector('#results').classList.add('show');

    var dailyTime1 = myJSON['daily']['time'][0];
    var dailyWeathercode1 = myJSON['daily']['weathercode'][0];
    var dailyTemperature_2m_max1 = myJSON['daily']['temperature_2m_max'][0];
    var dailyTemperature_2m_min1 = myJSON['daily']['temperature_2m_min'][0];
    var dailyRain_sum1 = myJSON['daily']['rain_sum'][0];
    var dailyWindspeed_10m_max1 = myJSON['daily']['windspeed_10m_max'][0];
    document.querySelector('.card1 .date').innerHTML = dailyTime1;
    document.querySelector('.card1 .weather__img').classList.add('img'+dailyWeathercode1);
    document.querySelector('.card1 .temperature__max').innerHTML = dailyTemperature_2m_max1;
    document.querySelector('.card1 .temperature__min').innerHTML = dailyTemperature_2m_min1;
    document.querySelector('.card1 .rain__value').innerHTML = dailyRain_sum1;
    document.querySelector('.card1 .wind__value').innerHTML = dailyWindspeed_10m_max1;

    var dailyTime2 = myJSON['daily']['time'][1];
    var dailyWeathercode2 = myJSON['daily']['weathercode'][1];
    var dailyTemperature_2m_max2 = myJSON['daily']['temperature_2m_max'][1];
    var dailyTemperature_2m_min2 = myJSON['daily']['temperature_2m_min'][1];
    var dailyRain_sum2 = myJSON['daily']['rain_sum'][1];
    var dailyWindspeed_10m_max2 = myJSON['daily']['windspeed_10m_max'][1];
    document.querySelector('.card2 .date').innerHTML = dailyTime2;
    document.querySelector('.card2 .weather__img').classList.add('img'+dailyWeathercode2);
    document.querySelector('.card2 .temperature__max').innerHTML = dailyTemperature_2m_max2;
    document.querySelector('.card2 .temperature__min').innerHTML = dailyTemperature_2m_min2;
    document.querySelector('.card2 .rain__value').innerHTML = dailyRain_sum2;
    document.querySelector('.card2 .wind__value').innerHTML = dailyWindspeed_10m_max2;

    var dailyTime3 = myJSON['daily']['time'][2];
    var dailyWeathercode3 = myJSON['daily']['weathercode'][2];
    var dailyTemperature_2m_max3 = myJSON['daily']['temperature_2m_max'][2];
    var dailyTemperature_2m_min3 = myJSON['daily']['temperature_2m_min'][2];
    var dailyRain_sum3 = myJSON['daily']['rain_sum'][2];
    var dailyWindspeed_10m_max3 = myJSON['daily']['windspeed_10m_max'][2];
    document.querySelector('.card3 .date').innerHTML = dailyTime3;
    document.querySelector('.card3 .weather__img').classList.add('img'+dailyWeathercode3);
    document.querySelector('.card3 .temperature__max').innerHTML = dailyTemperature_2m_max3;
    document.querySelector('.card3 .temperature__min').innerHTML = dailyTemperature_2m_min3;
    document.querySelector('.card3 .rain__value').innerHTML = dailyRain_sum3;
    document.querySelector('.card3 .wind__value').innerHTML = dailyWindspeed_10m_max3;

    var dailyTime4 = myJSON['daily']['time'][3];
    var dailyWeathercode4 = myJSON['daily']['weathercode'][3];
    var dailyTemperature_2m_max4 = myJSON['daily']['temperature_2m_max'][3];
    var dailyTemperature_2m_min4 = myJSON['daily']['temperature_2m_min'][3];
    var dailyRain_sum4 = myJSON['daily']['rain_sum'][3];
    var dailyWindspeed_10m_max4 = myJSON['daily']['windspeed_10m_max'][3];
    document.querySelector('.card4 .date').innerHTML = dailyTime4;
    document.querySelector('.card4 .weather__img').classList.add('img'+dailyWeathercode4);
    document.querySelector('.card4 .temperature__max').innerHTML = dailyTemperature_2m_max4;
    document.querySelector('.card4 .temperature__min').innerHTML = dailyTemperature_2m_min4;
    document.querySelector('.card4 .rain__value').innerHTML = dailyRain_sum4;
    document.querySelector('.card4 .wind__value').innerHTML = dailyWindspeed_10m_max4;

    var dailyTime5 = myJSON['daily']['time'][4];
    var dailyWeathercode5 = myJSON['daily']['weathercode'][4];
    var dailyTemperature_2m_max5 = myJSON['daily']['temperature_2m_max'][4];
    var dailyTemperature_2m_min5 = myJSON['daily']['temperature_2m_min'][4];
    var dailyRain_sum5 = myJSON['daily']['rain_sum'][4];
    var dailyWindspeed_10m_max5 = myJSON['daily']['windspeed_10m_max'][4];
    document.querySelector('.card5 .date').innerHTML = dailyTime5;
    document.querySelector('.card5 .weather__img').classList.add('img'+dailyWeathercode5);
    document.querySelector('.card5 .temperature__max').innerHTML = dailyTemperature_2m_max5;
    document.querySelector('.card5 .temperature__min').innerHTML = dailyTemperature_2m_min5;
    document.querySelector('.card5 .rain__value').innerHTML = dailyRain_sum5;
    document.querySelector('.card5 .wind__value').innerHTML = dailyWindspeed_10m_max5;

    var dailyTime6 = myJSON['daily']['time'][5];
    var dailyWeathercode6 = myJSON['daily']['weathercode'][5];
    var dailyTemperature_2m_max6 = myJSON['daily']['temperature_2m_max'][5];
    var dailyTemperature_2m_min6 = myJSON['daily']['temperature_2m_min'][5];
    var dailyRain_sum6 = myJSON['daily']['rain_sum'][5];
    var dailyWindspeed_10m_max6 = myJSON['daily']['windspeed_10m_max'][5];
    document.querySelector('.card6 .date').innerHTML = dailyTime6;
    document.querySelector('.card6 .weather__img').classList.add('img'+dailyWeathercode6);
    document.querySelector('.card6 .temperature__max').innerHTML = dailyTemperature_2m_max6;
    document.querySelector('.card6 .temperature__min').innerHTML = dailyTemperature_2m_min6;
    document.querySelector('.card6 .rain__value').innerHTML = dailyRain_sum6;
    document.querySelector('.card6 .wind__value').innerHTML = dailyWindspeed_10m_max6;

    var dailyTime7 = myJSON['daily']['time'][6];
    var dailyWeathercode7 = myJSON['daily']['weathercode'][6];
    var dailyTemperature_2m_max7 = myJSON['daily']['temperature_2m_max'][6];
    var dailyTemperature_2m_min7 = myJSON['daily']['temperature_2m_min'][6];
    var dailyRain_sum7 = myJSON['daily']['rain_sum'][6];
    var dailyWindspeed_10m_max7 = myJSON['daily']['windspeed_10m_max'][6];
    document.querySelector('.card7 .date').innerHTML = dailyTime7;
    document.querySelector('.card7 .weather__img').classList.add('img'+dailyWeathercode7);
    document.querySelector('.card7 .temperature__max').innerHTML = dailyTemperature_2m_max7;
    document.querySelector('.card7 .temperature__min').innerHTML = dailyTemperature_2m_min7;
    document.querySelector('.card7 .rain__value').innerHTML = dailyRain_sum7;
    document.querySelector('.card7 .wind__value').innerHTML = dailyWindspeed_10m_max7;

}

/*
La API es https://open-meteo.com/en/docs

Primero debemos hacer una petición para extraer la latitud, longitud y zona horaria de la ciudad que queremos buscar

var city = ...
var CITY_API_URL = `https://geocoding-api.open-meteo.com/v1/search?name=${city}`;

Con esa información, haremos una segunda petición que nos devolverá la predicción

var lat = ...
var lon = ...
var timezone = ...
var WEATHER_API_URL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min,rain_sum,windspeed_10m_max`;
*/

