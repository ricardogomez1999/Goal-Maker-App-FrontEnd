import { Link } from "react-router-dom";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import SettingsLinks from "./SettingsLinks";

export default function RightBanner() {
  return (
    <div className="flex flex-col justify-between w-40 h-screen bg-lightGray p-5 fixed z-10 top-0 bottom-0">
      <div className=" flex flex-col gap-10">
        <div className=" w-20 mx-auto">
          <Link to="/">
            <Logo logoType={2} />
          </Link>
        </div>
        <NavLinks />
      </div>
      <SettingsLinks />
    </div>
  );
}
