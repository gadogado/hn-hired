import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, useFetcher, useLoaderData, useSubmit } from "@remix-run/react";
import isequal from "lodash.isequal";
import omit from "lodash.omit";
import type { Dispatch } from "react";
import { createContext, useEffect, useReducer, useState } from "react";
import useScrollableRef from "use-scrollable-ref";
import Filters from "~/components/Filters";
import Header from "~/components/Header";
import Items from "~/components/Items";
import type { Item } from "~/models/item.server";
import { getItems } from "~/models/item.server";
import type { Story } from "~/models/story.server";
import { getLatestStories } from "~/models/story.server";
import type {
  DispatchAction,
  ItemsFilters
} from "~/reducers/itemsFiltersReducer";
import { itemsFiltersReducer } from "~/reducers/itemsFiltersReducer";
import { SCROLLABLE_THRESHOLD } from "~/utils/constants";

type LoaderData = {
  stories: Story[];
  initialItems: Partial<Item>[];
  initialItemsCount: number;
  initialStory: Story;
  selectedFilters: Array<string>;
};

interface ItemsFiltersContext {
  filterItems: Dispatch<DispatchAction>;
}

export const loader = async ({ request }: LoaderArgs) => {
  const stories = await getLatestStories();
  const initialStory = stories[0];
  const itemsQuery = await getItems({ storyId: initialStory?.id });
  const [initialItemsCount, initialItems] = itemsQuery;

  const url = new URL(request.url);
  const tags = url.searchParams.getAll("tag");

  return json<LoaderData>({
    stories,
    initialItems,
    initialStory,
    initialItemsCount,
    selectedFilters: tags,
  });
};

const ItemsFiltersDispatch = createContext<ItemsFiltersContext>({
  filterItems: () => null,
});

export default function Index() {
  const itemsFetcher = useFetcher();
  const data = useLoaderData<typeof loader>();
  const { initialStory, initialItems, initialItemsCount, stories } = data;

  const [items, setItems] = useState(initialItems);
  const [totalItemsCount, setTotalItemsCount] =
    useState<number>(initialItemsCount);

  const initialFilteredState: ItemsFilters = {
    searchText: "",
    fetcherUrl: "",
    sortOrder: "desc",
    remoteOnly: false,
    selectedFilters: data.selectedFilters,
    story: initialStory,
    cursor: null,
    prevFilters: null,
  };

  const [itemFilters, filterItems] = useReducer(
    itemsFiltersReducer,
    initialFilteredState
  );

  const {
    story,
    cursor,
    sortOrder,
    fetcherUrl,
    searchText,
    remoteOnly,
    selectedFilters,
    prevFilters,
  } = itemFilters;

  const { scrollableRef, scrollPosition, scrollableBottomReached } =
    useScrollableRef({
      bottomThreshold: SCROLLABLE_THRESHOLD,
    });

  const fetcherNotIdle = itemsFetcher?.state !== "idle";
  const fetchingMore = fetcherNotIdle && !!cursor;
  const fetcherLoading =
    fetcherNotIdle && !cursor && !(items.length >= totalItemsCount);

  /*
    Effects
  */

  useEffect(() => {
    if (!fetcherUrl.length) return;
    itemsFetcher.load(fetcherUrl);
  }, [fetcherUrl]);

  useEffect(() => {
    if (fetcherLoading) return;
    if (itemsFetcher?.data) {
      const { storyItems, storyItemsCount } = itemsFetcher.data || {};
      setItems((prevItems) => {
        const { cursor: prevCursor, ...prev } = prevFilters || {};
        const { cursor: currentCursor, ...current } = itemFilters || {};

        /* first fetcher request */
        if (!prevCursor && !currentCursor) return storyItems;

        /* fetcher filters have changed */
        const omitAttrs = ["prevFilters", "fetcherUrl"];
        const prevOmit = omit(prev, ...omitAttrs);
        const currentOmit = omit(current, ...omitAttrs);
        if (!isequal(prevOmit, currentOmit)) return storyItems;

        /* cursor based pagination  */
        const itemsWithoutCursor = storyItems.slice(1);
        const previousCursorItemId = String(storyItems?.[0]?.id);
        if (
          (!prevCursor && currentCursor) ||
          currentCursor === previousCursorItemId
        ) {
          return [...new Set([...prevItems, ...itemsWithoutCursor])];
        } else {
          return prevItems;
        }
      });
      setTotalItemsCount(storyItemsCount);
    }
  }, [itemsFetcher.data, fetcherLoading, itemFilters, prevFilters]);

  useEffect(() => {
    if (
      fetcherLoading ||
      fetchingMore ||
      !items.length ||
      items.length >= totalItemsCount ||
      !scrollableBottomReached
    )
      return;
    const cursor = String(items.at(-1)!.id);
    const payload = { name: "cursor", value: cursor };
    filterItems({ type: "change", payload });
  }, [
    scrollPosition,
    totalItemsCount,
    items,
    scrollableBottomReached,
    fetcherLoading,
    fetchingMore,
  ]);

  useEffect(() => {
    if (!scrollableRef?.current) return;
    scrollableRef.current.scrollTop = 0;
  }, [searchText, story, scrollableRef]);

  const submit = useSubmit();

  return (
    <ItemsFiltersDispatch.Provider value={{ filterItems }}>
      <div className="bg-slate-200">
        <Header story={story} stories={stories} searchText={searchText} />
        <main
          ref={scrollableRef}
          className="relative h-[calc(100vh-113px)] overflow-scroll bg-slate-200 pb-10 sm:h-[calc(100vh-81px)]"
        >
          <div className="mx-auto mt-8 flex flex-col bg-stone-50 p-4 text-slate-700 lg:max-w-5xl">
            <div className="flex flex-col gap-8">
              <Form
                method="get"
                action="/"
                onChange={(ev) => {
                  submit(ev.currentTarget, { replace: true });
                }}
              >
                <Filters selectedFilters={selectedFilters} />
              </Form>
              <Items
                items={items}
                fetcherLoading={fetcherLoading}
                fetchingMore={fetchingMore}
                totalItemsCount={totalItemsCount}
                selectedFilters={selectedFilters}
                remoteOnly={remoteOnly}
                sortOrder={sortOrder}
                searchText={searchText}
              />
            </div>
          </div>
        </main>
      </div>
    </ItemsFiltersDispatch.Provider>
  );
}

export { ItemsFiltersDispatch };
