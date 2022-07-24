const weatherdata = () => {
    const weather = {
        "apikey": "7c53daba198de082325f1404d7d4e977",
        fetchWeather:function(city){
            fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+this.apikey).then((Response) => Response.json())
            .then((data) => this.displayWeather(data));
        },

        displayWeather:function(data){
            const {description,icon} = data.weather[0];
            const {temp, feels_like, pressure, humidity} = data.main;
            const {speed, deg} = data.wind;
            const {all} = data.clouds;
            const {country} = data.sys;
            const { name } = data;
            
            document.getElementById('dec').innerText = description;
            document.getElementById('sun').src = 'img/'+ icon +'.png';
            document.getElementById('temp').innerHTML = Math.floor(temp)+"°"+ `<span></span>
            <span>External</span>`;
            document.getElementById('feel').innerHTML = Math.floor(feels_like)+"°"+ `<span></span>
            <span>Internal</span>`;
            document.getElementById('humi').innerText = humidity;
            document.getElementById('pre').innerText = pressure;
            document.getElementById('cloud').innerText = all;
            document.getElementById('wind_deg').innerText = deg;
            document.getElementById('wind').innerText = speed;
            document.getElementById('name').innerText = name;
            document.getElementById('con').innerText = country;

        }
    }
    weather.fetchWeather("Goa");
   
};

weatherdata();



const timeshow = () =>{
    let ti=new Date();
    let ho=ti.getHours();
    let mi=ti.getMinutes()
    let se=ti.getSeconds();
    ampm="AM";

    if(ho > 12){
        ho-=12;
        ampm="PM";
    }

    if(ho==0){
        tr = 12;
        ampm="AM";
    }

    h0 = ho < 10 ? "0" +ho :ho;
    mi = mi < 10 ? "0" +mi :mi; 
    se = se < 10 ? "0" +se :se;

    let maintime= ho+ ":" +mi + ":" +se;
    document.getElementById('time').innerText =maintime;
    document.getElementById('am_pm').innerText =ampm;

    const weekday=["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let day = weekday[ti.getDay()];
    document.getElementById('day').innerText = day;

    const mont=["January","Feburary", "March", "April", "May", "June", "July", "August", "Septembe", "October", "November", "December"]
    let month=mont[ti.getMonth()];
    document.getElementById('month').innerText=month;

    let date = ti.getDate();
    document.getElementById('date').innerText = date;

    let year = ti.getFullYear();
    document.getElementById('year').innerText =  year;


}

setInterval(timeshow,1000);
timeshow();