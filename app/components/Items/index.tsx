import { useState } from "react";
import ExternalLink from "./ExternalLink";
import RemoteOnly from "./RemoteOnly";
import Sort from "./Sort";
import ItemFilters from "./ItemFilters";
import type { ItemWithTags, SortOrder } from "~/models/item.server";
import clsx from "clsx";
import { format } from "timeago.js";
import ItemsSkeleton from "./ItemsSkeleton";
import { MAX_ITEM_TEXT } from "~/utils/constants";
import { sanitize } from "~/utils/helpers";

interface ItemCardProps {
  item: ItemWithTags;
  searchText: string;
  selectedFilters?: string[];
}

interface ItemsProps {
  items: ItemWithTags[];
  fetcherLoading: boolean;
  fetchingMore: boolean;
  totalItemsCount: number;
  selectedFilters: string[];
  remoteOnly: boolean;
  sortOrder: SortOrder;
  searchText: string;
}

function ItemCard({ item, selectedFilters, searchText }: ItemCardProps) {
  const exceedsLimit = item.text.length >= MAX_ITEM_TEXT;
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded((prev) => !prev);

  const mark = (html: string) => {
    const re = new RegExp(sanitize(searchText), "gi");
    return html.replace(re, `<mark>$&</mark>`);
  };
  const markedItemText = searchText.length ? mark(item.text) : item.text;

  return (
    <div className="text-3.5 relative flex w-full max-w-5xl flex-col rounded-lg bg-slate-50 pb-7 drop-shadow-card">
      <div className="flex h-[52px]">
        {item.company ? (
          <div
            className={
              "hidden max-w-xs truncate px-5 text-center align-middle font-bold leading-[52px] sm:block"
            }
          >
            {item.company}
          </div>
        ) : null}
        <div className="flex grow items-center justify-between bg-white pr-5 pl-5">
          <div className="flex items-baseline justify-center gap-4 md:text-base">
            <span className="text-[15px] font-semibold text-slate-900">
              {item.by}
            </span>
            <ExternalLink
              text={format(item.firebaseCreatedAt)}
              url={`https://news.ycombinator.com/item?id=${item.firebaseId}`}
            />
          </div>
          <ItemFilters selectedFilters={selectedFilters} filters={item.tags} />
        </div>
      </div>

      <div
        dangerouslySetInnerHTML={{ __html: markedItemText }}
        className={clsx(
          "p-5 pb-7 text-[15px] md:text-base",
          exceedsLimit &&
            !expanded &&
            "max-h-[420px] overflow-hidden text-ellipsis [white-space:wrap]"
        )}
      />

      {exceedsLimit ? (
        <div
          onClick={toggleExpanded}
          className="absolute bottom-3 right-[20px] z-50 rounded-lg bg-white p-1.5 text-sm italic shadow hover:cursor-pointer"
        >
          <div>{expanded ? "show less" : "show more"}</div>
        </div>
      ) : null}

      {exceedsLimit && !expanded ? (
        <div className="absolute bottom-0 h-24 w-full bg-gradient-to-b from-slate-50/40 to-slate-50" />
      ) : null}
    </div>
  );
}

export default function Items({
  items,
  fetcherLoading = false,
  fetchingMore = false,
  totalItemsCount,
  selectedFilters,
  remoteOnly,
  sortOrder,
  searchText,
}: ItemsProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <label
          className={clsx(
            "font-semibold text-slate-700 transition-colors duration-200",
            fetcherLoading && "text-slate-200"
          )}
        >
          {totalItemsCount} results
        </label>
        <div
          className={clsx(
            "transistion-all flex gap-2 duration-200",
            fetcherLoading && "opacity-75"
          )}
        >
          <div className="flex gap-1.5">
            <Sort sortOrder={sortOrder} />
            <RemoteOnly remoteOnly={remoteOnly} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {fetcherLoading ? (
          <ItemsSkeleton />
        ) : (
          items.map((item, key) => (
            <ItemCard
              item={item}
              key={key}
              selectedFilters={selectedFilters}
              searchText={searchText}
            />
          ))
        )}
      </div>
      {fetchingMore ? <ItemsSkeleton /> : null}
    </div>
  );
}
