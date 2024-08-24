import { useState } from "react";
import { formatCurrency, getDateRange } from "../../utils/utils";
import DateRangeSelector from "./FinancesComponents/DateRangeSelector";
import { useQuery } from "@tanstack/react-query";
import {
  getExpensesByDateRange,
  getIncomesByDateRange,
} from "../../api/FinancesAPI";

export default function FinanceOverview() {
  const [selectedRange, setSelectedRange] = useState("This month");

  const { startDate, endDate } = getDateRange(selectedRange);

  const { data: expensesData, isLoading: isLoadingExpenses } = useQuery({
    queryKey: ["expensesByDateRange", startDate, endDate],
    queryFn: () => getExpensesByDateRange(startDate, endDate),
  });

  const { data: incomeData, isLoading: isLoadingIncome } = useQuery({
    queryKey: ["incomeByDateRange", startDate, endDate],
    queryFn: () => getIncomesByDateRange(startDate, endDate),
  });

  const totalExpenses = expensesData?.reduce(
    (total, expense) => total + expense.quantity,
    0
  )!;

  const totalIncomes = incomeData?.reduce(
    (total, incomes) => total + incomes.quantity,
    0
  )!;

  return (
    <div className="grid grid-cols-2 p-4 rounded-lg shadow-md h-full">
      <div className="flex p-4 justify-between gap-1 h-1/2">
        <div className=" w-3/4">
          <h3 className="xl:text-lg font-semibold">Overview</h3>
          <p className="text-gray-600 xl:text-md text-sm">
            {new Date(startDate).toLocaleDateString()} -{" "}
            {new Date(endDate).toLocaleDateString()}
          </p>
        </div>
        <DateRangeSelector
          selectedRange={selectedRange}
          setSelectedRange={setSelectedRange}
        />
      </div>

      <div className=" flex justify-between p-4 h-1/2">
        <div>
          <h3 className="text-sm font-medium text-gray-600">Total Savings</h3>
          <p className="xl:text-2xl text-xl font-bold">
            {formatCurrency(totalIncomes - totalExpenses)}
          </p>
        </div>

        {/* <p className="text-green-500 text-sm">▲ 4%</p> */}
      </div>

      <div className="flex justify-between p-4 h-1/2">
        <div>
          <h3 className="text-sm font-medium text-gray-600">Total Incomes</h3>
          {isLoadingIncome ? (
            <div className="h-5 animate-pulse bg-gray-100 rounded-full dark:bg-gray-300 w-48 mt-3"></div>
          ) : (
            <p className="xl:text-2xl text-xl font-bold">
              {formatCurrency(totalIncomes)}
            </p>
          )}
        </div>

        {/* <p className="text-green-500 text-sm">▲ 8%</p> */}
      </div>

      <div className="flex justify-between p-4 h-1/2">
        <div>
          <h3 className="text-sm font-medium text-gray-600">Total Expenses</h3>
          {isLoadingExpenses ? (
            <div className="h-5 animate-pulse bg-gray-100 rounded-full dark:bg-gray-300 w-48 mt-3"></div>
          ) : (
            <p className="xl:text-2xl text-xl font-bold">
              {formatCurrency(totalExpenses)}
            </p>
          )}
        </div>
        {/* <p className="text-red-500 text-sm">▼ 5%</p> */}
      </div>
    </div>
  );
}
