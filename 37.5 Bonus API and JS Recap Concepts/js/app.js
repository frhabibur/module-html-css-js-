const API_KEY = '21b67a157c2871aa258b36ddfc55d8d2';

const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(response => response.json())
        .then(data => displayTemperature(data))
}
const setInnerText = (id, text) => {
    document.getElementById(id).innerHTML = text
    console.log(id, text)
}
const displayTemperature = temperature => {
    console.log(temperature)
    setInnerText('city', temperature.name)
    setInnerText('temperature', temperature.main.temp)
    setInnerText('conditon', temperature.weather[0].main)

    // set weather icon  
    const icon = temperature.weather[0].icon;
    const url = `http://openweathermap.org/img/wn/${icon}@2x.png`
    document.getElementById('weather-icon').setAttribute('src', url);
    console.log(url)

}

