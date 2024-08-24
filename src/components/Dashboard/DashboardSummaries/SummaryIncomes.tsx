import { useQuery } from "@tanstack/react-query";
import { getThisMonthsIncomes } from "../../../api/FinancesAPI";
import { CircleStackIcon } from "@heroicons/react/24/outline";
import { formatCurrency } from "../../../utils/utils";
import LoadingCardSummary from "../DashboardComponents/LoadingCardSummary";

export default function SummaryIncomes() {
  const { data, isLoading } = useQuery({
    queryKey: ["currentMonthIncomes"],
    queryFn: getThisMonthsIncomes,
  });

  if (isLoading) return <LoadingCardSummary />;

  const totalIncomes = data?.reduce(
    (total, income) => total + income.quantity,
    0
  )!;

  if (data)
    return (
      <div className="flex justify-center items-around py-3 px-8 border border-none rounded-lg shadow-md bg-gradient-to-r from-nice-red to-nice-pink h-28">
        <div className="flex flex-col w-2/3 justify-center">
          <h1 className=" font-normal text-white text-2xl">
            {formatCurrency(totalIncomes)}
          </h1>
          <h2 className=" text-white text-sm">Total incomes</h2>
        </div>
        <div className=" flex justify-center w-1/3">
          <CircleStackIcon className=" w-16 text-white" />
        </div>
      </div>
    );
}
