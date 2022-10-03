import { useState, useContext } from "react";
import ChevronUp from "./Icons/ChevronUp";
import type { Story } from "~/models/story.server";
import { ItemsFiltersDispatch } from "~/routes";

interface StorySelectProps {
  stories: Story[];
  story: Story;
}

const storyTitle = (createdAt: Date) => {
  return new Date(createdAt).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

export default function StorySelect({ stories, story }: StorySelectProps) {
  const { filterItems } = useContext(ItemsFiltersDispatch);

  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => setShowDropdown((prev) => !prev);

  const selectable = stories.filter((s) => s.id !== story.id);

  const chevronClass = `h-4 w-4 stroke-gray-700 stroke-1 ${
    showDropdown ? "transition rotate-180" : ""
  }`;

  const selectStory = (story: Story) => {
    const payload = { name: "story", value: story };
    return filterItems({ type: "change", payload });
  };

  return (
    <div onClick={toggleDropdown} className=" relative z-50 cursor-pointer">
      <button className="flex w-32 items-center justify-between rounded bg-gray-200 py-1 px-2 outline-0 drop-shadow-sm">
        <ChevronUp className={chevronClass} />
        <span className="font-nunito text-sm text-gray-700">
          {storyTitle(story.firebaseCreatedAt)}
        </span>
      </button>

      {showDropdown ? (
        <div className="absolute inline-block w-32 rounded-b-md bg-white p-1 drop-shadow-lg">
          <ul>
            {selectable.map((story) => (
              <li
                onClick={() => selectStory(story)}
                key={story.id}
                className="p-2 text-right font-nunito text-sm text-gray-700 hover:bg-gray-100"
              >
                {storyTitle(story.firebaseCreatedAt)}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
