import clsx from "clsx";
import { FILTERS_TAKE } from "~/utils/constants";

interface FilterProps {
  isSelected: boolean;
  slug: string;
  position: number;
  onToggleFilter: (slug: string) => void;
}

export default function Filter({
  isSelected = false,
  slug,
  onToggleFilter,
  position,
}: FilterProps) {
  const toggleFilter = () => onToggleFilter(slug);

  /* cannot compose names dynamically with tailwind */
  const colors = [
    "bg-lime-100",
    "bg-orange-100",
    "bg-purple-100",
    "bg-green-100",
    "bg-blue-100",
    "bg-red-100",
  ];
  const selectedColor = colors[(FILTERS_TAKE - position) % colors.length];

  return (
    <button
      onClick={toggleFilter}
      className={clsx(
        "box-border flex flex-row items-center justify-center rounded border-[1px] py-1 px-1.5 transition-colors hover:cursor-pointer",
        isSelected
          ? `border-gray-400 font-semibold tracking-normal text-gray-700 opacity-100 drop-shadow-sm ${selectedColor}`
          : `border-transparent" bg-white font-normal tracking-[0.105px] opacity-70`
      )}
    >
      {slug}
    </button>
  );
}
