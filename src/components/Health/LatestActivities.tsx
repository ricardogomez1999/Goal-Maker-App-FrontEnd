import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import TableRow from "./HealthComponents/TableRow";
import { getTodaysActivities } from "../../api/HealthAPI";

export default function LatestActivities() {
  const navigate = useNavigate();
  const { data, isLoading } = useQuery({
    queryKey: ["latestActivities"],
    queryFn: () => getTodaysActivities(),
  });

  return (
    <div className="rounded-lg shadow-md h-full  p-4">
      <div className=" flex w-full justify-between text-nice-red h-1/6">
        <h1 className=" font-bold text-xl">Latest Activities</h1>
        <button
          onClick={() =>
            navigate(location.pathname + "?transactionsComplete=true")
          }
        >
          see all
        </button>
      </div>
      <div className="mt-2 overflow-x-hidden max-h-40">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <table className="min-w-full divide-y divide-gray-200 h-fit">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sticky top-0 z-10 bg-gray-50">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sticky top-0 z-10 bg-gray-50">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sticky top-0 z-10 bg-gray-50">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data?.map((activity) => (
                <TableRow key={activity._id} row={activity} />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
