import Desc from "./Icons/Desc";
import Asc from "./Icons/Asc";
import type { SortOrder } from "~/models/item.server";

interface SortProps {
  sortOrder: SortOrder;
  onToggleSortOrder: () => void;
}

export default function Sort({ sortOrder, onToggleSortOrder }: SortProps) {
  const sortText = sortOrder === "desc" ? "newest" : "oldest";
  return (
    <div
      onClick={onToggleSortOrder}
      className="flex items-center gap-1 rounded border-[1px] bg-slate-100 px-2 py-1 text-sm text-slate-500 shadow-sm hover:cursor-pointer"
    >
      <span>{sortText}</span>
      {sortOrder === "desc" ? <Desc /> : <Asc />}
    </div>
  );
}
