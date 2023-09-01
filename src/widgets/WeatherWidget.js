import { WeatherContext } from "Contexts/WeatherContext";
import React, { useContext, useEffect, useState } from "react";
import loadingAnimation from "assets/loadinganimation.json";
import Lottie from "react-lottie-player";

const WeatherWidget = () => {
  // Get the context from WeatherContext
  const context = useContext(WeatherContext);
  const {
    weather,
    cities,
    setCities,
    loading,
    error,
    getWeather,
    getCities,
    getLocation,
    myLocation,
  } = context;

  // State to manage the input value for city search
  const [city, setCity] = useState("");

  // Effect to get user's location on component mount
  useEffect(() => {
    getLocation();
  }, []); // eslint-disable-line

  // Function to handle city search
  const changeCity = (place) => {
    if (place !== "") {
      getCities(place);
      setCity(place);
    } else {
      setCity("");
      setCities([]);
    }
  };

  // Function to handle clicking on a city result
  const cityClicked = (lat, long) => {
    getWeather(lat, long);
    setCity("");
    setCities([]);
  };

  return (
    // Main container for the WeatherWidget component
    <div className="flex flex-col items-center h-[60vh] p-2 bg-teal-50">
      {/* City Search */}
      <div className="flex flex-col p-2 w-full sm:w-2/4 m-2 justify-center items-center">
        {/* Input field for city search */}
        <input
          type="text"
          onChange={(e) => changeCity(e.target.value)}
          placeholder="Search for a place..."
          value={city}
          className="flex w-full p-2 rounded-xl focus:outline-none"
        />
        {/* Display city search results */}
        {city !== "" && (
          <div className="flex relative w-full z-10 justify-center">
            {error ? (
              // Display error message if there's an error
              <div className="flex text-slate-600 font-semibold p-2">
                Something went wrong! please try again.
              </div>
            ) : loading ? (
              // Display loading animation while fetching data
              <div className="flex flex-col items-center p-2 w-full bg-slate-200 rounded-lg absolute">
                <Lottie
                  animationData={loadingAnimation}
                  play
                  loop
                  className="w-1/12"
                />
              </div>
            ) : (
              // Display search results if no error and not loading
              <div className="flex flex-col p-2 w-full bg-slate-200 rounded-lg absolute">
                {cities.length !== 0 ? (
                  // Display cities if available
                  cities.map((city) => {
                    return (
                      <div
                        onClick={() => cityClicked(city.lat, city.lon)}
                        className="flex justify-center p-2 hover:bg-slate-300 rounded-xl hover:cursor-pointer animate-slidedown"
                      >
                        <div className="flex text-lg ">
                          {city.name}, {city.state}, {city.country}
                        </div>
                      </div>
                    );
                  })
                ) : (
                  // Display message if no cities found
                  <div className="flex w-full p-2 justify-center items-center text-xl text-zinc-400">
                    No cities found
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
      {/* Display location error message */}
      {!myLocation && <div className="flex text-teal-800">Couldn't get location</div>}
      {/* Display weather information */}
      {weather && (
        <div className="flex w-full sm:w-2/4 animate-growOut">
          <div className="flex flex-col p-4 bg-slate-300 rounded-xl text-teal-800 w-full gap-4">
            {/* Display city and country */}
            <div className="flex flex-col gap-1 items-center relative">
              <div className="flex  text-2xl font-bold">{weather.name}</div>
              <div className="flex text-xl">{weather.sys.country}</div>
            </div>
            {/* Display temperature and weather */}
            <div className="flex flex-col items-center gap-2">
              <div className="flex text-3xl font-semibold gap-2 text-slate-600">
                {weather.main.temp}
                <span className="text-xl">&deg;F</span>
              </div>
              <div className="flex text-lg font-semibold">
                {weather.weather[0].main}
              </div>
              <div className="flex">
                Feels like: {weather.main.feels_like}
                <span className="text-sm">&deg;F</span>
              </div>
            </div>
            {/* Display max and min temperatures */}
            <div className="flex justify-around">
              <div className="flex text-lg font-semibold">
                Max: {weather.main.temp_max}
                <span className="text-sm">&deg;F</span>
              </div>
              <div className="flex text-lg font-semibold">
                Min: {weather.main.temp_min}
                <span className="text-sm">&deg;F</span>
              </div>
            </div>
            {/* Display wind speed and weather description */}
            <div className="flex flex-col items-center">
              <div className="flex font-medium">
                Wind speed: {weather.wind.speed} knots
              </div>
              <div className="flex">{weather.weather[0].description}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherWidget;
