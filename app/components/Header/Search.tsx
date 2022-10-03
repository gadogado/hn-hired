import { useState, useContext } from "react";
import SearchIcon from "./Icons/Search";
import CancelIcon from "./Icons/Cancel";
import { ItemsFiltersDispatch } from "~/routes";

interface SearchProps {
  searchText: string;
}

export default function Search({ searchText }: SearchProps) {
  const { filterItems } = useContext(ItemsFiltersDispatch);
  const [search, setSearch] = useState(searchText);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    return dispatchSearch();
  };

  const resetSearch = () => {
    setSearch("");
    return dispatchSearch({ reset: true });
  };

  const dispatchSearch = ({ reset = false } = {}) => {
    const payload = { name: "searchText", value: reset ? "" : search };
    return filterItems({ type: "change", payload });
  };

  const inputIcon =
    "absolute inset-y-0 flex h-full items-center justify-center hover:cursor-pointer";

  return (
    <form onSubmit={handleSubmit} className="relative flex">
      <input
        className="outline-1.5 sm:w-75 flex w-full rounded-lg border-slate-200 bg-gray-100 p-2 pr-8 text-gray-600 outline-slate-400 transition-colors focus:shadow focus:outline"
        name="search"
        role="search"
        placeholder="Search"
        autoComplete="off"
        value={search}
        onChange={({ currentTarget }) => setSearch(currentTarget?.value)}
      />
      {search.length ? (
        <div className={`right-10 ${inputIcon}`}>
          <CancelIcon
            className="h-4 w-4 stroke-slate-500 transition-colors hover:stroke-slate-700"
            onClick={resetSearch}
          />
        </div>
      ) : null}
      <button
        onClick={handleSubmit}
        className={`right-0 w-8 rounded-r-lg border-[1px] bg-gray-200 fill-gray-500 ${inputIcon}`}
      >
        <SearchIcon className=" w-4 fill-gray-500 transition-colors duration-200 hover:fill-gray-700" />
      </button>
    </form>
  );
}
