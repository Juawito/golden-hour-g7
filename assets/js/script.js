let searchInput = $('.search-input');
let currentApi = 'https://api.geocod.io/v1.6/geocode?';
let sunriseApi = 'https://api.sunrise-sunset.org/json?'
let apiKey = '&api_key=f4ea0e36fa26426ef641161fff3673044056a24';

function getCurrentApi(requestUrl) {
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let lat = data.results[0].location.lat;
            let lon = data.results[0].location.lng;
            getSunriseApi(lat, lon);
        });
}
function getSunriseApi(lat, lon) {
    let latParam = 'lat=' + lat;
    let lonParam = 'lng=' + lon;
    let date = '&date=';
    let selectedDate = localStorage.getItem('date');
    let finalApiString = sunriseApi + latParam + '&' + lonParam + date + selectedDate + '&formatted=0';
    fetch(finalApiString)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            function converUtcToLocal(time) {
                let date = new Date(time);
                return date.toString();
            }
            let sunriseTime = data.results.sunrise;
            let sunsetTime = data.results.sunset;
            let localSunriseTime = converUtcToLocal(sunriseTime);
            let localSunsetTime = converUtcToLocal(sunsetTime);
            let sunTimes = {
                sunrise: localSunriseTime,
                sunset: localSunsetTime
            }
            localStorage.setItem('Suntimes', JSON.stringify(sunTimes));
        })
    .then(function(){
        document.location.replace('sunrise-sunset.html');
    });
}
$('.searchbtn').on('click', function (event) {
    event.preventDefault();
    let zipCode = $('.search-input').val();
    let date = $('.datepicker').val();
    localStorage.setItem('date', date);
    zipCode = 'postal_code=' + zipCode;
    let finalApiString = currentApi + zipCode + apiKey;
    getCurrentApi(finalApiString);
})
let calendar = document.querySelector('.datepicker');
M.Datepicker.init(calendar, {
    format: 'yyyy-mm-dd',
    autoClose: true,
})