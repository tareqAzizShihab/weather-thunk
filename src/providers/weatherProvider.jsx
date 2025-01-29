import { weatherContext } from "../context/contexts";
import useWeather from "../hooks/useWeather";

const WeatherProvider = ({ children }) => {
  const weatherData = useWeather();
  return (
    <weatherContext.Provider value={weatherData}>
      {children}
    </weatherContext.Provider>
  );
};

export default WeatherProvider;
