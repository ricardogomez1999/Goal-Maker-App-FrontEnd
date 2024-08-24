export default function LoadingCardSummary() {
  return (
    <div className="p-4 border border-none rounded-lg shadow-md ">
      <div role="status" className="max-w-sm animate-pulse">
        <div className="h-3 bg-gray-100 rounded-full dark:bg-gray-200 w-full mb-3"></div>
        <div className="h-3 bg-gray-100 rounded-full dark:bg-gray-200 w-full mb-3"></div>
        <div className="h-3 bg-gray-100 rounded-full dark:bg-gray-200 w-full mb-3"></div>
      </div>
    </div>
  );
}
