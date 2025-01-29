import { useContext } from "react";
import {
  saveLocationContext,
  searchedItemContext,
} from "../../context/contexts";
export default function FavoriteListModal({ isSavedModalShow, handleModal }) {
  const { removeSaveLocation, saveLocation } = useContext(saveLocationContext);
  const { setSearchedItem } = useContext(searchedItemContext);
  return (
    isSavedModalShow && (
      <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg">
        <div
          onClick={handleModal}
          className="absolute right-1 top-1 rounded-full hover:text-red-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-bold px-4">Favourite Locations</h3>
        <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
          {saveLocation.map((item) => (
            <li
              key={item.latitude}
              onClick={() => {
                setSearchedItem({
                  latitude: item.latitude,
                  longitude: item.longitude,
                });
                handleModal();
              }}
              className="hover:bg-gray-200 flex justify-between"
            >
              <p>{item.location}</p>
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  removeSaveLocation({
                    location: item.location,
                    latitude: item.latitude,
                    longitude: item.longitude,
                  });
                }}
                className="ml-1 p-1 rounded hover:bg-gray-300 hover:text-red-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4 justify-self-end"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </span>
            </li>
          ))}
        </ul>
      </div>
    )
  );
}
