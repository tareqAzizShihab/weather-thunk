import { useContext, useEffect, useState } from "react";
import { saveLocationContext, weatherContext } from "../../context/contexts";
export default function AddFavorite() {
  const weatherData = useContext(weatherContext);
  const { addSaveLocation, removeSaveLocation, saveLocation } =
    useContext(saveLocationContext);

  const [isSaved, setIsSaved] = useState(false);

  function handleSaveLocation() {
    addSaveLocation({
      location: weatherData.location,
      latitude: weatherData.latitude,
      longitude: weatherData.longitude,
    });
  }
  function handleUnsaveLocation() {
    removeSaveLocation({
      location: weatherData.location,
      latitude: weatherData.latitude,
      longitude: weatherData.longitude,
    });
  }

  useEffect(() => {
    setIsSaved(
      saveLocation.find((item) => item.location === weatherData.location)
    );
  }, [saveLocation, weatherData]);

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D] hover:bg-gray-300 cursor-pointer">
          <span onClick={isSaved ? handleUnsaveLocation : handleSaveLocation}>
            {isSaved ? "Unsave Location" : "Save Location"}
          </span>
        </button>
      </div>
    </div>
  );
}
