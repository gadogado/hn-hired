import SwitchOn from "./Icons/SwitchOn";
import SwitchOff from "./Icons/SwitchOff";
import clsx from "clsx";

interface RemoteOnlyProps {
  remoteOnly: boolean;
  onToggleRemoteOnly: () => void;
}

export default function RemoteOnly({
  onToggleRemoteOnly,
  remoteOnly,
}: RemoteOnlyProps) {
  return (
    <div
      onClick={onToggleRemoteOnly}
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
