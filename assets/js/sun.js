function rendertSunTimes(){
    let sunTimes = JSON.parse(localStorage.getItem('Suntimes'));
    // let sunTimesArr = [sunriseTime,sunsetTime];
    // for (let i = 0; i < sunTimesArr.length; i++){
    //     let cardBody = $('div'.attr('class','card'));
    //     let cardImageEl = $('div'.attr('class','card-image'));
    //     let cardContentEl = $('div'.attr('class','card-content'));
    //     let cardImage = $('img').attr('src','images/sample-1.jpg');
    //     let cardTitle = $('span').attr('class', 'card-title').text('Card Title');
    //     cardImageEl.append(cardImage);
    //     cardImageEl.append(cardTitle);
    //     cardBody.append(cardImageEl);
    //     console.log(cardImage);


    // }
    // $('div'.addClass('card-action'));
    // console.log(sunTimesArr);
    let cardContent = $('.card-content');
    // console.log(cardContent.text(sunsetTime));
    let content = $('<p>')
    content.text(sunsetTime);
    cardContent.append(content);
}