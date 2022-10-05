const weatherApi = {
   
        key: "7c53daba198de082325f1404d7d4e977",
        baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}       

let searchInputBox = document.getElementById('input-box')

searchInputBox.addEventListener('keypress',function(event){
    if(event.keyCode == 13){
        if(searchInputBox.value ==="")
            {alert('Please enter input value')}
        console.log(searchInputBox.value)
        getWeatherReport(searchInputBox.value)
    }
})

function getWeatherReport(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`).then(function(weather){
        return weather.json()
    }).then (showWeatherReport)
}

function showWeatherReport(weather){
    console.log(weather);

    let city = document.getElementById('city')
    let date = document.getElementById('date')    
    let temp = document.getElementById('temp')    
    let min_max = document.getElementById('min-max')    
    let my_weather = document.getElementById('weather')    

    // city.innerHTMl= `${weather.name}, ${weather.sys.country}`
    city.innerHTML = `${weather.name}, ${weather.sys.country}`
    console.log(city.innerHTML);
    temp.innerHTML= `${weather.main.temp}&deg;C`
    my_weather.innerHTML = `${weather.weather[0].main}`
    min_max.innerHTML = `${weather.main.temp_min}&deg;C(min)/${weather.main.temp_max}&deg;C(max)`



    let todayDate = new Date()
    date.innerHTML = datemanager(todayDate)

    if(my_weather.textContent == 'Clouds'){
        document.body.style.backgroundImage = 'url(./img/clouds.webp)'
    }else if(my_weather.textContent == 'Clear')
    {
        document.body.style.backgroundImage = 'url(./img/clear.avif)'
    }else if(my_weather.textContent == 'Haze')
    { 
        document.body.style.backgroundImage = 'url(./img/haze.jpg)'
    }
    else if(my_weather.textContent == 'Rain')
    {
        document.body.style.backgroundImage = 'url(./img/rain.jpg)'
    }
    else if(my_weather.textContent == 'Snow')
    { 
        document.body.style.backgroundImage = 'url(./img/snow.jpg)'
    }
    else if(my_weather.textContent == 'Thunderstorm')
    { 
        document.body.style.backgroundImage = 'url(./img/thunder.jpg)'
    }
    else if(my_weather.textContent == 'Smoke')
    { 
        document.body.style.backgroundImage = 'url(./img/smoke.jpg)'
    }

}


function datemanager(todayDate){
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday" , "Thursday","Friday", "Saturday"]
    let months = ["January" ,"Feburary" , "March" ,"April","May","June","July","August","September","October","November","December"]

    let year = todayDate.getFullYear()
    let month = months[todayDate.getMonth()]
    let date = todayDate.getDate()
    let day = days[todayDate.getDay()]

    return `${date} ${month} (${day}),${year}`

}


