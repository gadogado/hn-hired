export default function ItemsSkeleton() {
  return (
    <div className="flex animate-pulse flex-col gap-4 rounded-lg bg-slate-50 px-5 pt-8 pb-24 drop-shadow-card">
      <span className="h-4 w-1/5 rounded-md bg-gray-300" />
      <span className="h-4 w-full rounded-md bg-gray-300" />
      <span className="h-4 w-full rounded-md bg-gray-300" />
      <span className="h-4 w-full rounded-md bg-gray-300 " />
      <span className="h-4 w-3/4 rounded-md bg-gray-300 " />
      <span />
      <span className="h-4 w-3/4 rounded-md bg-gray-300 " />
      <span className="h-4 w-3/4 rounded-md bg-gray-300" />
    </div>
  );
}
