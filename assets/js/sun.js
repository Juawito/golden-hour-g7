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
backButton.on('click', function (){
    document.location.replace('index.html');
})
rendertSunTimes();