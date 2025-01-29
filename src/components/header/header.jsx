import { useState } from "react";
import Favorite from "./favorite";
import FavoriteListModal from "./favoriteListModal";
import Logo from "./logo";
import SearchBox from "./searchBox";
export default function Header() {
  const [isSavedModalShow, setIsSaveModalShow] = useState(false);
  function handleModal() {
    setIsSaveModalShow(!isSavedModalShow);
  }
  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
      <nav className="container flex items-center justify-between py-6">
        <Logo />

        <div className="flex items-center gap-4 relative">
          <SearchBox />

          <Favorite handleModal={handleModal} />

          {/* <!-- Modal --> */}
          <FavoriteListModal
            isSavedModalShow={isSavedModalShow}
            handleModal={handleModal}
          />
        </div>
      </nav>
    </header>
  );
}
