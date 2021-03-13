let searchInput = $('.search-input');
let geocodeUrl = 'https://maps.googleapis.com/maps/api/geocode/json?';
let apiKey = '&key=AIzaSyAv0lbkZaNS64EIJ7todpgUcLBAYfnjJn8';

function getCurrentApi(requestUrl) {
    fetch(requestUrl)
        .then(function (data) {
            console.log(data);

        });
}
$('.searchbtn').on('click', function(event){
    event.preventDefault();
    let location = searchInput.val();
    let finalApiStr = geocodeUrl + 'address=' + location + apiKey;
    getCurrentApi(finalApiStr);
})
