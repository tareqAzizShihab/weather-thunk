const searchGeoname = async (value) => {
  const response = await fetch(
    `http://api.geonames.org/searchJSON?q=${value}&maxRows=1&username=${
      import.meta.env.VITE_GEONAME_USER
    }`
  );
  const data = await response.json();
  return {
    latitude: data.geonames[0].lat,
    longitude: data.geonames[0].lng,
  };
};

export default searchGeoname;
