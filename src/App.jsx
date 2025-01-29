import Page from "./page";
import SaveLocaionContextProvider from "./providers/saveLocationProvider";
import SearchedItemProvider from "./providers/searchedItemProvider";
import WeatherProvider from "./providers/weatherProvider";
function App() {
  return (
    <SearchedItemProvider>
      <WeatherProvider>
        <SaveLocaionContextProvider>
          <div className="bg-body font-[Roboto] text-light">
            <Page />
          </div>
        </SaveLocaionContextProvider>
      </WeatherProvider>
    </SearchedItemProvider>
  );
}

export default App;
