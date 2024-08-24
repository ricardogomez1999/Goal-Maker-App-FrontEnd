import { useQuery } from "@tanstack/react-query";
import { getThisMonthsExpenses } from "../../../api/FinancesAPI";
import { BanknotesIcon } from "@heroicons/react/24/outline";
import { formatCurrency } from "../../../utils/utils";
import LoadingCardSummary from "../DashboardComponents/LoadingCardSummary";

export default function SummaryExpenses() {
  const { data, isLoading } = useQuery({
    queryKey: ["monthlyExpenses"],
    queryFn: getThisMonthsExpenses,
  });

  if (isLoading) return <LoadingCardSummary />;

  const totalExpenses = data?.reduce(
    (total, expense) => total + expense.quantity,
    0
  )!;

  if (data)
    return (
      <div className="flex justify-center items-around py-3 px-8 border border-none rounded-lg shadow-md bg-gradient-to-r from-nice-blue to-nice-darkerBlue h-28">
        <div className="flex flex-col w-2/3 justify-center">
          <h1 className=" font-normal text-white text-2xl ">
            {formatCurrency(totalExpenses)}
          </h1>
          <h2 className=" text-white text-sm">Total expenses</h2>
        </div>
        <div className=" flex justify-center w-1/3">
          <BanknotesIcon className=" w-16 text-white" />
        </div>
      </div>
    );
}
