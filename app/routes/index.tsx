import { useState, useEffect } from "react";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useFetcher } from "@remix-run/react";
import { getLatestStories } from "~/models/story.server";
import { getItems } from "~/models/item.server";
import Header from "~/components/Header";
import Items from "~/components/Items";
import Filters from "~/components/Filters";
import type { Story } from "~/models/story.server";
import type { Item, SortOrder } from "~/models/item.server";
import { SCROLLABLE_THRESHOLD } from "~/utils/constants";
import isequal from "lodash.isequal";
import useScrollableRef from "use-scrollable-ref";

type LoaderData = {
  stories: Story[];
  initialItems: Partial<Item>[];
  initialItemsCount: number;
  initialStory: Story;
};

interface FilterItems {
  newStory?: Story;
  newSelectedFilters?: string[];
  newSearchText?: string;
  newRemoteOnly?: boolean;
  newSortOrder?: SortOrder;
  newCursorId?: string;
}

interface FiltersHistory {
  prev?: FiltersParams;
  current?: FiltersParams;
}

interface FiltersParams {
  storyId?: Story;
  filters?: string;
  search?: string;
  remoteOnly?: boolean;
  sort?: SortOrder;
  cursorId?: string;
}

export const loader: LoaderFunction = async () => {
  const stories = await getLatestStories();
  const initialStory = stories[0];
  const itemsQuery = await getItems({ storyId: initialStory?.id });
  const [initialItemsCount, initialItems] = itemsQuery;
  return json<LoaderData>({
    stories,
    initialItems,
    initialStory,
    initialItemsCount,
  });
};

export default function Index() {
  const itemsFetcher = useFetcher();
  const { initialStory, initialItems, initialItemsCount, stories } =
    useLoaderData();

  const [story, setStory] = useState(initialStory);
  const [items, setItems] = useState(initialItems);
  const [totalItemsCount, setTotalItemsCount] =
    useState<number>(initialItemsCount);
  const [searchText, setSearchText] = useState("");
  const [remoteOnly, setRemoteOnly] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [history, setHistory] = useState<FiltersHistory>({});

  const onSelectStory = (newStory: Story) => {
    setStory(newStory);
    filterItems({ newStory });
  };
  const onSearchItems = (newSearchText: string) => {
    setSearchText(newSearchText);
    filterItems({ newSearchText });
  };
  const onSelectFilters = (newSelectedFilters: string[]) => {
    setSelectedFilters(newSelectedFilters);
    filterItems({ newSelectedFilters });
  };
  const onToggleRemoteOnly = () => {
    setRemoteOnly((prev) => !prev);
    filterItems({ newRemoteOnly: !remoteOnly });
  };
  const onToggleSortOrder = () => {
    const newSortOrder: SortOrder = sortOrder !== "desc" ? "desc" : "asc";
    setSortOrder(newSortOrder);
    filterItems({ newSortOrder });
  };

  const filterItems = ({
    newStory,
    newSelectedFilters,
    newSearchText,
    newRemoteOnly,
    newSortOrder,
    newCursorId,
  }: FilterItems) => {
    const params = new URLSearchParams();
    const storyId = newStory?.id || story.id;
    const base = `/stories/${storyId}/items`;
    if (storyId !== initialStory.id) params.append("storyId", storyId);

    const search = newSearchText ?? searchText;
    if (search.length) params.append("search", search);

    const filters = newSelectedFilters || selectedFilters;
    if (filters.length) params.append("filters", filters.join(","));

    params.append("remoteOnly", String(newRemoteOnly ?? remoteOnly));
    params.append("sort", newSortOrder || sortOrder);
    if (newCursorId) params.append("cursorId", newCursorId);

    setHistory(({ current: prevCurrent }) => ({
      prev: prevCurrent,
      current: Object.fromEntries(params),
    }));
    itemsFetcher.load(`${base}?${params}`);
  };

  const { scrollableRef, scrollPosition, scrollableBottomReached } =
    useScrollableRef({
      bottomThreshold: SCROLLABLE_THRESHOLD,
    });
  const fetcherLoading = itemsFetcher.state !== "idle";

  /* 
    Effects
  */
  useEffect(() => {
    if (fetcherLoading) return;
    if (itemsFetcher?.data) {
      const { storyItems, storyItemsCount } = itemsFetcher.data || {};
      setItems((prevItems: Partial<Item>[]) => {
        const { cursorId: prevCursorId, ...prevHistory } = history?.prev || {};
        const { cursorId: nextCursorId, ...currentHistory } =
          history.current || {};

        if (!prevCursorId && !nextCursorId) return storyItems;
        if (!isequal(prevHistory, currentHistory)) return storyItems;

        /* Append new items without the previous search cursor */
        const itemsWithoutCursor = storyItems.slice(1);
        const previousCursorItemId = String(storyItems?.[0]?.id);

        if (!prevCursorId) return [...prevItems, ...itemsWithoutCursor];
        if (prevCursorId === previousCursorItemId) {
          return [...prevItems, ...itemsWithoutCursor];
        } else {
          return prevItems;
        }
      });
      setTotalItemsCount(storyItemsCount);
    }
  }, [itemsFetcher.data]);

  useEffect(() => {
    if (
      fetcherLoading ||
      !items.length ||
      items.length >= totalItemsCount ||
      !scrollableBottomReached
    )
      return;
    const newCursorId = String(items.at(-1).id);
    filterItems({ newCursorId });
  }, [scrollPosition]);

  useEffect(() => {
    if (!scrollableRef?.current) return;
    scrollableRef.current.scrollTop = 0;
  }, [searchText, story, scrollableRef]);

  return (
    <div className="bg-slate-200">
      <Header
        story={story}
        stories={stories}
        onSelectStory={onSelectStory}
        searchText={searchText}
        onSearchItems={onSearchItems}
      />
      <main
        ref={scrollableRef}
        className="relative h-[calc(100vh-113px)] overflow-scroll bg-slate-200 pb-10 sm:h-[calc(100vh-81px)]"
      >
        <div className="mx-auto mt-8 flex flex-col bg-stone-50 p-4 text-slate-700 lg:max-w-5xl">
          <div className="flex flex-col gap-8">
            <Filters
              selectedFilters={selectedFilters}
              selectFilters={onSelectFilters}
            />
            <Items
              items={items}
              fetcherLoading={fetcherLoading}
              totalItemsCount={totalItemsCount}
              selectedFilters={selectedFilters}
              remoteOnly={remoteOnly}
              onToggleRemoteOnly={onToggleRemoteOnly}
              sortOrder={sortOrder}
              onToggleSortOrder={onToggleSortOrder}
              searchText={searchText}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
