import { NavLink } from "react-router-dom";
import {
  Cog6ToothIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

export default function SettingsLinks() {
  return (
    <ul>
      <hr className=" w-24 mx-auto mb-3" />
      <li>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive
              ? "bg-nice-black/10 rounded-xl p-2 w-auto flex flex-col justify-center items-center font-bold"
              : "hover:bg-nice-black/10 rounded-xl p-2 transition-all w-auto flex flex-col justify-center items-center font-bold"
          }
        >
          <Cog6ToothIcon className=" w-8" />
          Settings
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive
              ? "bg-nice-black/10 rounded-xl p-2 w-auto flex flex-col justify-center items-center font-bold text-center"
              : "hover:bg-nice-black/10 rounded-xl p-2 transition-all w-auto flex flex-col justify-center items-center font-bold text-center"
          }
        >
          <QuestionMarkCircleIcon className=" w-8" />
          Help & Support
        </NavLink>
      </li>
    </ul>
  );
}
