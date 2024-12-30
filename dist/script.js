const apiKey = 'eae80a54dc637d9fbeca7590582b47dd'
const srcBtn = document.querySelector("#btn")
let inputValue = document.querySelector("#searchInput")


srcBtn.addEventListener('click', (e) => {
    const city = inputValue.value.trim()

    if (city) {
        getWeather(city)
        inputValue.value = ""
    }
    else {
        alert('Enter city name')
    }
});


function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    fetch(url).then((response) => {
        if (!response.ok) {
            throw new Error("City not found")
        }
        return response.json()
    }).then((data) => {
        displayWeather(data)
    }).catch(error => alert(error.message))
}

function displayWeather(data) {
    document.getElementById("city-name").textContent = `Weather in ${data.name}`;
    document.getElementById("temperature").textContent = `Temperature: ${data.main.temp}°C`;
    document.getElementById("description").textContent = `Condition: ${data.weather[0].description}`;
    document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
}