import { saveLocationContext } from "../context/contexts";
import useLocalStorage from "../hooks/useLocalStorage";
export default function SaveLocaionContextProvider({ children }) {
  const [saveLocation, setSaveLocation] = useLocalStorage();

  function removeSaveLocation(value) {
    const filteredLocation = saveLocation
      .slice()
      .filter((item) => item.location !== value.location);
    setSaveLocation(filteredLocation);
  }
  function addSaveLocation(value) {
    setSaveLocation([...saveLocation, value]);
  }

  return (
    <saveLocationContext.Provider
      value={{ addSaveLocation, removeSaveLocation, saveLocation }}
    >
      {children}
    </saveLocationContext.Provider>
  );
}
