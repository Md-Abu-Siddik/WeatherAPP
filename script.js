function cityWeather(){
    const cityName = document.getElementById('cityName').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=39e5a52eadbb0db545e2feeebff08143`)
    .then(res => res.json())
    .then(data => {
        const showCity = document.getElementById('showCity');
        const showTemp = document.getElementById('showTemp');
        const showWeather = document.getElementById('lead');
        const weatherImg = document.getElementById('weatherImg');
        showCity.innerText = data.name;
        showTemp.innerText = data.main.temp;
        showWeather.innerText = data.weather[0].main;
        if(cityName == 'dhaka'){
            document.body.style.backgroundImage = "url('images/cloudyDhaka.jpg')";
            if(showWeather == 'clouds'){
                alert('true');
            }
        }
        else if(cityName == 'london'){
            document.body.style.backgroundImage = "url('images/london.jpg')";
        }
        else if(cityName == 'chicago'){
            document.body.style.backgroundImage = "url('images/chicago.jpg')";
        }
        else{
            document.body.style.backgroundImage = "url(images/bg-image.jpg)";
        }

        if(showWeather.innerText == 'Clouds'){
            weatherImg.src = 'images/cloud.png';
        }
        else if(showWeather.innerText == 'Mist'){
            weatherImg.src = 'images/haze.png';
        }
        else if(showWeather.innerText == 'Haze'){
            weatherImg.src = 'images/haze.png';
        }
        else if(showWeather.innerText == 'Clouds'){
            weatherImg.src = 'images/rainy.jpg';
        }
        else if(showWeather.innerText == 'Clear'){
            weatherImg.src = 'images/sun.png';
        }
    });
}
function defaultWeather(){
    cityName = 'dhaka';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=39e5a52eadbb0db545e2feeebff08143`)
    .then(res => res.json())
    .then(data => {
        const showCity = document.getElementById('showCity');
        const showTemp = document.getElementById('showTemp');
        const showWeather = document.getElementById('lead');
        showCity.innerText = data.name;
        showTemp.innerText = data.main.temp;
        showWeather.innerText = data.weather[0].main;
        if(cityName == 'dhaka'){
            document.body.style.backgroundImage = "url('images/cloudyDhaka.jpg')";
        }

        if(showWeather.innerText == 'Clouds'){
            weatherImg.src = 'images/cloud.png';
        }
        else if(showWeather.innerText == 'Mist'){
            weatherImg.src = 'images/haze.png';
        }
        else if(showWeather.innerText == 'Haze'){
            weatherImg.src = 'images/haze.png';
        }
        else if(showWeather.innerText == 'Clouds'){
            weatherImg.src = 'images/rainy.jpg';
        }
        else if(showWeather.innerText == 'Clear'){
            weatherImg.src = 'images/sun.png';
        }
    });
}
defaultWeather();