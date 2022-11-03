import Search from "~/components/Header/Search";
import SelectStory from "~/components/Header/SelectStory";
import type { Story } from "~/models/story.server";
import Github from "./Icons/Github";

interface HeaderProps {
  searchText: string;
  stories: Story[];
  story: Story;
}

export default function Header({ searchText, story, stories }: HeaderProps) {
  return (
    <header className="box-sizing sticky top-0 z-10 border-b border-b-slate-300 bg-stone-50">
      <div className="mx-auto flex h-28 max-w-5xl flex-col justify-between py-1 px-4 pb-3 sm:h-20 sm:flex-row sm:items-center sm:py-0 sm:pb-0">
        <div className="flex items-center justify-between sm:justify-start">
          <div className="mr-6 flex items-center">
            <div className="mr-2 font-cardo text-2xl font-bold leading-10 tracking-wide text-slate-700 sm:text-3xl md:block">
              hn hired
            </div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/gadogado/hn-hired"
            >
              <Github className="h-5 w-5 fill-slate-700" />
            </a>
          </div>
          <SelectStory story={story} stories={stories} />
        </div>
        <Search searchText={searchText} />
      </div>
    </header>
  );
}
