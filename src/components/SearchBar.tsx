import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

export default function SearchBar() {
  return (
    <form action="submit" className=" flex gap-2 text-textGray">
      <button type="submit">
        <MagnifyingGlassIcon className=" w-5" />
      </button>

      <input
        type="text"
        placeholder="search"
        className=" bg-transparent capitalize p-1 focus:outline-none"
      />
    </form>
  );
}
