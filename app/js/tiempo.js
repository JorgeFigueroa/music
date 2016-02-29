/**
 * Created by jorge on 13/02/16.
 */
window.addEventListener('load', init, false);

function init() {
var API_WEATHER_KEY = "80114c7878f599621184a687fc500a12";
var API_WEATHER_URL = "http://api.openweathermap.org/data/2.5/weather?APPID=" + API_WEATHER_KEY + "&";
var IMG_WEATHER = "http://openweathermap.org/img/w/";
var today = new Date();
var timeNow2 = today.toLocaleTimeString();  // la ora en formato 12:55:45 PM
var today = new Date();
var timeNow = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
$('#data').append(timeNow);

/*geolocalizamos nuestra posicion Inyectando Datos en nuestro template*/
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getCoords, errorFound);
} else {
    alert("Por favor, actualiza tu navegador");
}

function errorFound(error) {
    alert("Un error ocurrió: " + error.code);
}
;
function getCoords(position) {
    $.getJSON(API_WEATHER_URL + "lat=" + position.coords.latitude + "&lon=" + position.coords.longitude, getCurrentWeather);
}
;

function getCurrentWeather(data) {
    var cityWeather = {
        zone: data.name,
        country: data.sys.country,
        temp: data.main.temp - 273.15,
        temp_max: data.main.temp_max - 273.15,
        temp_min: data.main.temp_min - 273.15,
        icon: IMG_WEATHER + data.weather[0].icon + ".png"
    }
    renderTemplate(cityWeather);
}


/*Inyectando Datos en nuestro template */
function activateTemplate(id) {   //activa template
    var t = document.querySelector(id);
    return document.importNode(t.content, true);
}
;
function renderTemplate(cityWeather) {   //renderiza template
    var clone = activateTemplate("#template--city");
    clone.querySelector("[data-time]").innerHTML = timeNow2;
    clone.querySelector("[data-city]").innerHTML = cityWeather.zone;
    clone.querySelector("[data-country]").innerHTML = cityWeather.country;
    clone.querySelector("[data-icon]").src = cityWeather.icon;
    clone.querySelector("[data-temp='max']").innerHTML = cityWeather.temp_max.toFixed(1);
    clone.querySelector("[data-temp='min']").innerHTML = cityWeather.temp_min.toFixed(1);
    clone.querySelector("[data-temp='current']").innerHTML = cityWeather.temp.toFixed(1);
    $(".loader").hide();
    $("#header").append(clone);
}


}