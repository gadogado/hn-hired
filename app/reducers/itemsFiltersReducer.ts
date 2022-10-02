import type { Story } from "~/models/story.server";
import type { SortOrder } from "~/models/item.server";

export interface DispatchAction {
  type: "change" | "toggleSort" | "toggleRemote";
  payload?: any;
}

export interface ItemsFilters {
  story: Story;
  sortOrder: SortOrder;
  searchText: string;
  fetcherUrl: string;
  remoteOnly: boolean;
  selectedFilters: string[];
  cursor: null | string;
  prevFilters: null | ItemsFilters;
}

const buildFetcherUrl = ({
  story,
  searchText,
  selectedFilters,
  remoteOnly,
  cursor,
  sortOrder,
  prevFilters,
}: ItemsFilters) => {
  const params = new URLSearchParams();
  const base = `/stories/${story.id}/items`;

  params.append("storyId", String(story.id));
  if (searchText.length) params.append("search", searchText);
  if (selectedFilters.length)
    params.append("filters", selectedFilters.join(","));

  if (cursor && prevFilters?.cursor !== cursor)
    params.append("cursorId", cursor);

  params.append("sort", sortOrder);
  params.append("remoteOnly", String(remoteOnly));

  return `${base}?${params}`;
};

export const itemsFiltersReducer = (
  state: ItemsFilters,
  { type, payload }: DispatchAction
) => {
  const withFetcher = (newValues: ItemsFilters) => {
    const fetcherUrl = buildFetcherUrl({ ...newValues, prevFilters: state });
    return { ...newValues, fetcherUrl, prevFilters: state };
  };

  switch (type) {
    case "change":
      return withFetcher({ ...state, [payload?.name]: payload?.value });
    case "toggleSort":
      const sortOrder: SortOrder = state.sortOrder !== "desc" ? "desc" : "asc";
      return withFetcher({ ...state, sortOrder });
    case "toggleRemote":
      return withFetcher({ ...state, remoteOnly: !state.remoteOnly });
    default:
      return state;
  }
};
