import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useQuery } from "@tanstack/react-query";
import { getBudget, getThisMonthsExpenses } from "../../api/FinancesAPI";
import { formatCurrency } from "../../utils/utils";

export default function FinancesBudget() {
  const { data: spentData, isLoading: spentLoading } = useQuery({
    queryKey: ["spentThisMonth"],
    queryFn: () => getThisMonthsExpenses(),
  });
  const { data: budgetData, isLoading: budgetLoading } = useQuery({
    queryKey: ["getBudget"],
    queryFn: () => getBudget(),
  });
  const budget = budgetData?.reduce(
    (total, budget) => total + budget.quantity,
    0
  )!;

  const spent = spentData?.reduce((total, spent) => total + spent.quantity, 0)!;

  const budgetLeftPercentage = (spent * 100) / budget;
  return (
    <div className="row-span-1 rounded-lg shadow-md flex justify-between h-full items-center">
      <div className=" flex justify-center w-1/4 h-5/6 mx-auto">
        <CircularProgressbar
          value={budgetLeftPercentage}
          styles={buildStyles({
            pathColor: budgetLeftPercentage >= 30 ? "#DC2626" : "#4BACAE",
            trailColor: "#F5F5F5",
            textSize: 12,
            textColor: budgetLeftPercentage >= 30 ? "#DC2626" : "#4BACAE",
          })}
          text={`${budgetLeftPercentage.toFixed()}% spent`}
        />
      </div>
      <div className=" flex flex-col items-center w-1/2 gap-1 h-full justify-center">
        <div className=" flex w-3/4 justify-between items-center p-2 border-b border-gray-300">
          <p className=" text-nice-blue font-bold text-lg">Budget</p>
          {budgetLoading ? (
            <div className="h-4 animate-pulse bg-gray-100 rounded-full dark:bg-gray-300 w-1/2"></div>
          ) : (
            <p>{formatCurrency(budget)}</p>
          )}
        </div>
        <div className=" flex w-3/4  justify-between p-2 border-b border-gray-300">
          <p className=" text-nice-blue font-bold text-lg">Available</p>
          {budgetLoading && spentLoading ? (
            <div className="h-4 animate-pulse bg-gray-100 rounded-full dark:bg-gray-300 w-1/2"></div>
          ) : (
            <p>{formatCurrency(budget - spent)}</p>
          )}
        </div>
        <div className=" flex w-3/4  justify-between p-2 border-b border-gray-300">
          <p className=" text-nice-blue font-bold text-lg">Spent</p>
          {spentLoading ? (
            <div className="h-4 animate-pulse bg-gray-100 rounded-full dark:bg-gray-300 w-1/2"></div>
          ) : (
            <p>{formatCurrency(spent)}</p>
          )}
        </div>
      </div>
    </div>
  );
}
