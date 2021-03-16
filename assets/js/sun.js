const sunriseText = $('#sunrise-text');
const sunsetText = $('#sunset-text');
function rendertSunTimes() {
    let sunTimes = JSON.parse(localStorage.getItem('Suntimes'));
    let sunrise = sunTimes.sunrise;
    let sunset = sunTimes.sunset;
    sunriseText.text(sunrise);
    sunsetText.text(sunset);
}
rendertSunTimes();