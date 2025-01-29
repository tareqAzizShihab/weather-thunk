import { useContext } from "react";
import pinLogo from "../../assets/pin.svg";
import { weatherContext } from "../../context/contexts";
import getFormatedTime from "../../utility function/convertDT";
export default function WeatherHeadline() {
  const weatherData = useContext(weatherContext);

  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {Math.floor(weatherData.temperature)}°
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={pinLogo} />
            <h2 className="text-2xl lg:text-[50px]">{weatherData.location}</h2>
          </div>
        </div>
      </div>
      {weatherData.time && (
        <p className="text-sm lg:text-lg">
          {getFormatedTime(weatherData.time, "time")} -{" "}
          {getFormatedTime(weatherData.time, "date")}
        </p>
      )}
    </div>
  );
}
