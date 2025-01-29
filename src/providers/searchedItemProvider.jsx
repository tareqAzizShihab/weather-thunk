import { useState } from "react";
import { searchedItemContext } from "../context/contexts";
export default function SearchedItemProvider({ children }) {
  const [searchedItem, setSearchedItem] = useState({});
  return (
    <searchedItemContext.Provider value={{ setSearchedItem, searchedItem }}>
      {children}
    </searchedItemContext.Provider>
  );
}
