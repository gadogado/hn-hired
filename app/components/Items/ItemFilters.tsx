import type { Tag } from "~/models/tag.server";

interface ItemFiltersProps {
  filters: Pick<Tag, "slug">[];
  selectedFilters?: string[];
}

export default function ItemFilters({
  filters,
  selectedFilters,
}: ItemFiltersProps) {
  const intersection = filters.filter(({ slug }) =>
    selectedFilters?.includes(slug)
  );

  return (
    <div className="hidden gap-2 sm:flex">
      {intersection.map(({ slug }, key) => (
        <div
          key={key}
          className="box-border rounded border-[1px] border-gray-200 bg-white py-px px-2 text-sm font-normal tracking-[0.105px] text-gray-400"
        >
          {slug}
        </div>
      ))}
    </div>
  );
}
