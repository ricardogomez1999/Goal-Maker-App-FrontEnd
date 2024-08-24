import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function NavMenu() {
  return (
    <Popover className="relative flex ">
      <PopoverButton className=" group flex justify-center items-center gap-3 p-2 h-auto focus:outline-none">
        <img src="/userLogo.svg" alt="user logo" />
        <div className=" text-nice-black font-bold leading-none">
          <p className=" mb-0">Mary</p>
          <p className=" text-textGray font-normal mt-0 text-sm">User</p>
        </div>
        <div className=" border-2 rounded-full border-textGray w-5">
          <ChevronDownIcon className="group-data-[open]:rotate-180 transition-all" />
        </div>
      </PopoverButton>

      <PopoverPanel
        anchor={{ to: "bottom", gap: "30px" }}
        className="flex origin-top flex-col transition duration-200 ease-out w-40 bg-white p-3 text-center shadow-lg rounded-md data-[closed]:scale-95 data-[closed]:opacity-0"
        transition
      >
        <a href="#">My profile</a>
        <a href="#">Security</a>
        <a href="#">Settings</a>
        <a href="#" className=" text-nice-orange">
          Log Out
        </a>
      </PopoverPanel>
    </Popover>
  );
}
