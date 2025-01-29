import { createContext } from "react";

const weatherContext = createContext("");
const searchedItemContext = createContext("");
const saveLocationContext = createContext("");

export { saveLocationContext, searchedItemContext, weatherContext };
