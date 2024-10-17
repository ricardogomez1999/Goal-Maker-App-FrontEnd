import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { PlusCircleIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";

export default function CreateHealthMenu() {
  const navigate = useNavigate();
  return (
    <Popover className="relative flex ">
      <PopoverButton className=" group flex justify-center items-center gap-3 p-2 h-auto focus:outline-none">
        <PlusCircleIcon className=" w-24 text-nice-red" />
      </PopoverButton>

      <PopoverPanel
        anchor={{ to: "top end", gap: "-10px" }}
        className="flex origin-top flex-col transition duration-200 ease-out w-52 bg-white py-5 text-center shadow-xl border-gray-100 border rounded-md data-[closed]:scale-95 data-[closed]:opacity-0 text-xl"
        transition
      >
        <button
          className=" text-nice-red"
          onClick={() => navigate(location.pathname + "?newFood=true")}
        >
          Add Food
        </button>
        <button
          className=" text-nice-green"
          onClick={() => navigate(location.pathname + "?newActivity=true")}
        >
          Add Activity
        </button>
      </PopoverPanel>
    </Popover>
  );
}
