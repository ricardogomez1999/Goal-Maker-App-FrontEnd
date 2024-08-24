export default function LoadingCard() {
  return (
    <div className="flex flex-col justify-between p-5 border border-none rounded-lg shadow-md ">
      <div role="status" className="max-w-sm animate-pulse">
        <div className="h-7 bg-gray-100 rounded-full dark:bg-gray-200 w-48 mb-3"></div>
        <div className="h-8 bg-gray-100 rounded-full dark:bg-gray-200 w-full mb-3"></div>
        <div className="h-8 bg-gray-100 rounded-full dark:bg-gray-200 w-full mb-3"></div>
        <div className="h-8 bg-gray-100 rounded-full dark:bg-gray-200 w-full mb-3"></div>
        <div className="h-4 bg-gray-100 rounded-full dark:bg-gray-200 w-12 mt-5"></div>
      </div>
    </div>
  );
}
