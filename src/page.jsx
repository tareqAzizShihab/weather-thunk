import { useContext, useEffect, useState } from "react";
import Clear from "./assets/backgrounds/clear-sky.jpg";
import Default from "./assets/backgrounds/default.webp";
import Clouds from "./assets/backgrounds/few-clouds.jpg";
import Mist from "./assets/backgrounds/mist.jpeg";
import Rain from "./assets/backgrounds/rainy-day.jpg";
import Snow from "./assets/backgrounds/snow.jpg";
import Thunderstorm from "./assets/backgrounds/thunderstorm.jpg";
import Header from "./components/header/header";
import WeatherBoard from "./components/weatherBoard/weatherBoard";
import { weatherContext } from "./context/contexts";

export default function Page() {
  const weatherData = useContext(weatherContext);
  const [background, setBackground] = useState(Default);
  useEffect(() => {
    switch (weatherData.climate) {
      case "Thunderstorm":
        setBackground(Thunderstorm);
        break;
      case "Rain":
        setBackground(Rain);
        break;
      case "Snow":
        setBackground(Snow);
        break;
      case "Clear":
        setBackground(Clear);
        break;
      case "Clouds":
        setBackground(Clouds);
        break;
      case "Mist":
        setBackground(Mist);
        break;
      default:
        setBackground(Default);
        break;
    }
  }, [weatherData.climate]);

  return (
    <div
      style={{ backgroundImage: `url('${background}')` }}
      className={`bg-no-repeat bg-cover h-screen grid place-items-center`}
    >
      <Header />

      <main>
        <section className="">
          <WeatherBoard />
        </section>
      </main>
    </div>
  );
}
