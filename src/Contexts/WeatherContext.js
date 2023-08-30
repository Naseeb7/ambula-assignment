import { createContext, useState } from "react";

// Create a new context for managing weather-related state
export const WeatherContext = createContext();

// Fetch the weather URL and API key from the environment variables
const weatherUrl = process.env.REACT_APP_WEATHER_URL;
const apiKey = process.env.REACT_APP_API_KEY;

// Define the WeatherState component to manage weather-related state
export const WeatherState = (props) => {
  // State to manage cities, weather data, loading status, error status, and location status
  const [cities, setCities] = useState([]);
  const [weather, setWeather] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [myLocation, setMyLocation] = useState(false);

  // Function to get user's geolocation
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
      setMyLocation(true);
    } else {
      setMyLocation(false);
    }
  }

  // Function to handle user's geolocation position
  const showPosition = (position) => {
    getWeather(position.coords.latitude, position.coords.longitude);
  }

  // Function to fetch weather data using latitude and longitude
  const getWeather = async (latitude, longitude) => {
    const url = `${weatherUrl}/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setWeather(data);
  };

  // Function to fetch city data based on a search query
  const getCities = async (city) => {
    try {
      setLoading(true);
      const url = `${weatherUrl}/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setCities(data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
      console.log(error);
    }
  };

  // Provide the defined values and functions through the context
  return (
    <WeatherContext.Provider value={{
      cities,
      setCities,
      loading,
      error,
      getWeather,
      getCities,
      weather,
      getLocation,
      myLocation
    }}>
      {props.children}
    </WeatherContext.Provider>
  );
};
