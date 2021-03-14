let searchInput = $('.search-input');
let currentApi = 'https://api.openweathermap.org/data/2.5/weather?q=';
let sunriseApi = 'https://api.sunrise-sunset.org/json?'
let apiKey = '&appid=cffe501940779b25824bab372a571e3e';

function getCurrentApi(requestUrl) {
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            let lon = data.coord.lon;
            let lat = data.coord.lat;
            getSunriseApi(lat, lon);
        });
}
function getSunriseApi(lat, lon) {
    let latParam = 'lat=' + lat;
    let lonParam = 'lng=' + lon;
    let finalApiString = sunriseApi + latParam + '&' + lonParam;
    fetch(finalApiString)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            let sunriseTime = data.sunrise;
            let sunsetTime = data.sunset;
            rendertSunTimes(sunriseTime, sunsetTime);
        })
}
$('.searchbtn').on('click', function (event) {
    event.preventDefault();
    let city = $('.search-input').val();
    let finalCurrentWeather = currentApi + city + apiKey;
    getCurrentApi(finalCurrentWeather);
    // document.location.replace('sunrise-sunset.html');
})
