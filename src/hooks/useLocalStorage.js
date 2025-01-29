import { useEffect, useState } from "react";
function useLocalStorage() {
  const [value, setValue] = useState(
    JSON.parse(window.localStorage.getItem("storedLocation")) || []
  );
  useEffect(() => {
    window.localStorage.setItem("storedLocation", JSON.stringify(value));
  }, [value]);
  return [value, setValue];
}

export default useLocalStorage;
