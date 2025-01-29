import { useContext, useState } from "react";
import searchLogo from "../../assets/search.svg";
import { searchedItemContext } from "../../context/contexts";
import searchGeoname from "../../utility function/search Geoname";
export default function SearchBox() {
  const { setSearchedItem } = useContext(searchedItemContext);
  const [searchValue, setSearchValue] = useState("");

  function handleChange(e) {
    setSearchValue(e.target.value);
  }
  function handleSearch() {
    searchGeoname(searchValue).then((area) => {
      setSearchedItem(area);
    });
  }
  return (
    <form action="#">
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          onChange={(e) => {
            handleChange(e);
          }}
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          placeholder="Search Location"
          required
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            handleSearch();
          }}
          type="submit"
          className="cursor-pointer"
        >
          <img src={searchLogo} />
        </button>
      </div>
    </form>
  );
}
