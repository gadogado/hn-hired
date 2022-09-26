import { useEffect } from "react";
import { useFetcher } from "@remix-run/react";
import Filter from "./Filter";
import Cancel from "./Icons/Cancel";
import { useMediaQuery } from "react-responsive";

interface FiltersProps {
  selectFilters: (slugs: string[]) => void;
  selectedFilters: string[];
}

export default function Filters({
  selectFilters,
  selectedFilters,
}: FiltersProps) {
  const fetcher = useFetcher();
  const isSmAndUp = useMediaQuery({ query: "(min-width: 640px)" });

  useEffect(() => {
    if (fetcher.type === "init") fetcher.load(`/tags`);
  }, [fetcher]);

  const isSelected = (slug: string) => selectedFilters.includes(slug);

  const toggleFilter = (slug: string) => {
    const updatedFilters = isSelected(slug)
      ? selectedFilters.filter((x: string) => x !== slug)
      : [...selectedFilters, slug];
    selectFilters(updatedFilters);
  };

  const resetFilters = () => {
    selectFilters([]);
  };

  const { tags: filters = [] } = fetcher.data || {};
  const availableFilters = isSmAndUp
    ? filters
    : filters.slice(0, filters.length / 2.3);

  return (
    <div>
      <div className="flex flex-col">
        <div className="gap2 mb-4 flex flex-row">
          <label className="mr-4 font-semibold text-slate-700">
            popular filters
          </label>
          {selectedFilters?.length ? (
            <button
              className="flex flex-row items-center justify-center gap-2 rounded-md bg-white px-2 text-sm drop-shadow-btn"
              onClick={resetFilters}
            >
              <Cancel />
              <span>reset</span>
            </button>
          ) : null}
        </div>

        <div className="min-h-fit rounded bg-white p-2.5 text-sm shadow-container">
          <div className="flex flex-row flex-wrap gap-2.5">
            {availableFilters.length
              ? availableFilters.map(
                  ({ slug }: { slug: string }, idx: number) => (
                    <Filter
                      key={slug}
                      slug={slug}
                      position={idx}
                      isSelected={isSelected(slug)}
                      onToggleFilter={toggleFilter}
                    />
                  )
                )
              : [...Array(12)].map((_, key) => (
                  <span
                    key={key}
                    className="h-[30px] w-20 animate-pulse rounded-md bg-gray-200"
                  />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}
