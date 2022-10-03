import { useContext } from "react";
import SwitchOn from "./Icons/SwitchOn";
import SwitchOff from "./Icons/SwitchOff";
import { ItemsFiltersDispatch } from "~/routes";
import clsx from "clsx";

interface RemoteOnlyProps {
  remoteOnly: boolean;
}

export default function RemoteOnly({ remoteOnly }: RemoteOnlyProps) {
  const { filterItems } = useContext(ItemsFiltersDispatch);
  const onToggle = () => filterItems({ type: "toggleRemote" });

  return (
    <div
      onClick={onToggle}
      className={clsx(
        "flex items-center gap-2.5 rounded border-[1px] py-[2px] px-2 text-sm tracking-[0.0002em] text-slate-500 shadow-sm hover:cursor-pointer",
        remoteOnly ? "border-slate-200  bg-white" : "bg-slate-100"
      )}
    >
      <div>remote only</div>
      {remoteOnly ? <SwitchOn /> : <SwitchOff />}
    </div>
  );
}
