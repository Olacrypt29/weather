const weatherData = [
  { city: "New York", temperature: 10, description: "Sunny", humidity: 40 },
  { city: "London", temperature: 8, description: "Cloudy", humidity: 75 },
  { city: "Paris", temperature: 12, description: "Rainy", humidity: 80 },
  { city: "Tokyo", temperature: 15, description: "Windy", humidity: 60 },
  { city: "Lagos", temperature: 30, description: "Humid", humidity: 85 },
];

function getWeather() {
  const cityInput = document.getElementById("cityInput").value.trim();

  // Find the city in the weather data array
  const cityWeather = weatherData.find(
    (data) => data.city.toLowerCase() === cityInput.toLowerCase()
  );

  // Display the weather information or show an error
  const weatherDiv = document.getElementById("weather");
  if (cityWeather) {
    document.getElementById("city").textContent = cityWeather.city;
    document.getElementById("temperature").textContent =
      `Temperature: ${cityWeather.temperature}°C`;
    document.getElementById("description").textContent =
      `Description: ${cityWeather.description}`;
    document.getElementById("humidity").textContent =
      `Humidity: ${cityWeather.humidity}%`;

    weatherDiv.style.display = "block";
  } else {
    weatherDiv.style.display = "none";
    alert("City not found in the dataset!");
  }
}