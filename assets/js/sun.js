const sunriseText = $('#sunrise-text');
const sunsetText = $('#sunset-text');
const backButton = $('#returnHome');
function rendertSunTimes() {
    let sunTimes = JSON.parse(localStorage.getItem('Suntimes'));
    let sunrise = sunTimes.sunrise;
    let sunset = sunTimes.sunset;
    sunriseText.text(sunrise);
    sunsetText.text(sunset);
}
backButton.on('click', function () {
    $('header').addClass('header-out');
    $('button').addClass('button-out');
    $('.sunrise-card').addClass('sunrise-card-out');
    $('.sunset-card').addClass('sunset-card-out');
    setTimeout(() => {
        document.location.replace('index.html');
    }, 1100)
})
rendertSunTimes();n