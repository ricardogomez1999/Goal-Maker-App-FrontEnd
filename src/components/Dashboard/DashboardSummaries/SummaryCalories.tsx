import { useQuery } from "@tanstack/react-query";
import { getTodaysActivities } from "../../../api/HealthAPI";
import { FireIcon } from "@heroicons/react/24/outline";
import LoadingCardSummary from "../DashboardComponents/LoadingCardSummary";

export default function SummaryCalories() {
  const { data, isLoading } = useQuery({
    queryKey: ["todaysActivities"],
    queryFn: getTodaysActivities,
  });

  if (isLoading) return <LoadingCardSummary />;

  const totalCalories = data?.reduce(
    (total, activity) => total + activity.calories,
    0
  );

  if (data)
    return (
      <div className="flex justify-around items-center py-3 px-8 border border-none rounded-lg shadow-md bg-gradient-to-r from-nice-pink to-nice-orange h-28">
        <div className="flex flex-col w-2/3 justify-center">
          <h1 className=" font-normal text-white text-4xl">{totalCalories}</h1>
          <h2 className=" text-white text-sm">Burned calories</h2>
        </div>
        <div className=" flex justify-center w-1/3">
          <FireIcon className=" w-16 text-white" />
        </div>
      </div>
    );
}
