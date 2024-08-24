import { Outlet } from "react-router-dom";
import RightBanner from "../components/RightBanner";
import SearchBar from "../components/SearchBar";
import { BellIcon } from "@heroicons/react/24/outline";
import NavMenu from "../components/NavMenu";

export default function AppLayout() {
  return (
    <div className="w-screen h-screen absolute">
      <RightBanner />
      <header className=" fixed flex bg-lightGray h-20 w-auto right-0 left-40 p-6 justify-between">
        <SearchBar />
        <div className="flex gap-20">
          <a href="#" className="w-8">
            <BellIcon className=" text-textGray" />
          </a>
          <NavMenu />
        </div>
      </header>
      <main className="flex fixed left-40 top-20 bottom-0 h-auto right-0 m-auto justify-center p-10">
        <Outlet />
      </main>
    </div>
  );
}
