import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { User } from "../Types";
import { useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";

type NavMenuProps = {
  user: User;
  isLoading: boolean;
  isError: boolean;
};

export default function NavMenu({ user, isLoading }: NavMenuProps) {
  const queryClient = useQueryClient();

  const logout = () => {
    localStorage.removeItem("AUTH_TOKEN");
    queryClient.invalidateQueries({ queryKey: ["user"] });
  };

  return (
    <Popover className="relative flex ">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <PopoverButton className=" group flex justify-center items-center gap-3 p-2 h-auto focus:outline-none">
          <img src="/userLogo.svg" alt="user logo" />
          <div className=" text-nice-black font-bold leading-none">
            <p className=" mb-0">{user.name.split(" ")[0]}</p>
            <p className=" text-textGray font-normal mt-0 text-sm">User</p>
          </div>
          <div className=" border-2 rounded-full border-textGray w-5">
            <ChevronDownIcon className="group-data-[open]:rotate-180 transition-all" />
          </div>
        </PopoverButton>
      )}

      <PopoverPanel
        anchor={{ to: "bottom", gap: "30px" }}
        className="flex origin-top flex-col transition duration-200 ease-out w-40 bg-white p-3 text-center shadow-lg rounded-md data-[closed]:scale-95 data-[closed]:opacity-0"
        transition
      >
        <Link to="/profile">My profile</Link>
        <Link to="/settings">Settings</Link>
        <button className=" text-nice-orange" onClick={logout}>
          Log Out
        </button>
      </PopoverPanel>
    </Popover>
  );
}
