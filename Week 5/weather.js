// Function to get weather data from OpenWeather API
function getWeatherData() {

        const apiKey = "d0de9e699e0a53d46aaf9dc18db5b62c";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
        // Fetch weather data
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
            // Update weather information on the page
            document.getElementById("location").textContent = data.name;
            document.getElementById("temperature").textContent = data.main.temp;
            document.getElementById("description").textContent =
              data.weather[0].description;
              document.getElementById("weather_icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

            // Show weather information
            document.getElementById("weather-info").style.display = "block";
          })
          .catch((error) => {
            console.log("Error occurred while fetching weather data:", error);
          });
}

// Function to get weather data from OpenWeather API
function getWeatherMap() {

  const apiKey = "d0de9e699e0a53d46aaf9dc18db5b62c";
  const apiUrl = `http://maps.openweathermap.org/maps/2.0/weather/${op}/${z}/${x}/${y}?appid=${apiKey}`;
  // Fetch weather data
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      // Update weather information on the page
      document.getElementById("location").textContent = data.name;
      document.getElementById("temperature").textContent = data.main.temp;
      document.getElementById("description").textContent =
        data.weather[0].description;
        document.getElementById("weather_icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

      // Show weather information
      document.getElementById("weather-info").style.display = "block";
    })
    .catch((error) => {
      console.log("Error occurred while fetching weather data:", error);
    });
}






