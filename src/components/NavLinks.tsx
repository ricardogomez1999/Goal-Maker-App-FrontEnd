import { NavLink } from "react-router-dom";
import { ChartPieIcon, CircleStackIcon } from "@heroicons/react/24/outline";

export default function NavLinks() {
  return (
    <nav>
      <ul className=" flex flex-col gap-10 text-nice-black">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "bg-nice-black/10 rounded-xl p-2 w-auto flex flex-col justify-center items-center font-bold"
                : "hover:bg-nice-black/10 rounded-xl p-2 transition-all w-auto flex flex-col justify-center items-center font-bold"
            }
          >
            <ChartPieIcon className=" w-8" />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/finance"
            className={({ isActive }) =>
              isActive
                ? "bg-nice-black/10 rounded-xl p-2 w-auto flex flex-col justify-center items-center font-bold"
                : "hover:bg-nice-black/10 rounded-xl p-2 transition-all w-auto flex flex-col justify-center items-center font-bold"
            }
          >
            <CircleStackIcon className=" w-8" />
            Finance
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
