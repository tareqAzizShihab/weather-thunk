import { useContext, useEffect, useState } from "react";
import { searchedItemContext } from "../context/contexts";
const useWeather = () => {
  const [weatherData, setWeatherData] = useState({
    location: "",
    climate: "",
    temperature: "",
    maxTemperature: "",
    minTemperature: "",
    humidity: "",
    cloudPercentage: "",
    wind: "",
    time: "",
    longitude: "",
    latitude: "",
  });

  const { searchedItem } = useContext(searchedItemContext);

  const fetchWeatherData = async (latitude, longitude) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${
        import.meta.env.VITE_WEATHER_KEY
      }&units=metric`
    );
    const data = await response.json();

    const filteredData = {
      location: data?.name,
      climate: data?.weather[0]?.main,
      temperature: data?.main?.temp,
      maxTemperature: data?.main?.temp_max,
      minTemperature: data?.main?.temp_min,
      humidity: data?.main?.humidity,
      cloudPercentage: data?.clouds?.all,
      wind: data?.wind?.speed,
      time: data?.dt,
      longitude: data?.coord?.lon,
      latitude: data?.coord?.lat,
    };
    setWeatherData(filteredData);
  };
  useEffect(() => {
    if (!searchedItem.latitude && !searchedItem.longitude) {
      navigator.geolocation.getCurrentPosition((position) => {
        fetchWeatherData(position.coords.latitude, position.coords.longitude);
      });
    } else {
      fetchWeatherData(searchedItem.latitude, searchedItem.longitude);
    }
  }, [searchedItem]);
  return weatherData;
};
export default useWeather;
