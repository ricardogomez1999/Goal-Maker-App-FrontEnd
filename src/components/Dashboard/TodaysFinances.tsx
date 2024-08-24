import { useQuery } from "@tanstack/react-query";
import { getTodaysExpenses } from "../../api/FinancesAPI";
import { Link } from "react-router-dom";
import ExpensesCard from "./DashboardComponents/ExpensesCard";
import LoadingCard from "./DashboardComponents/LoadingCard";

export default function TodaysExpenses() {
  const { data, isLoading } = useQuery({
    queryKey: ["todaysExpenses"],
    queryFn: getTodaysExpenses,
  });

  if (isLoading) return <LoadingCard />;

  if (data?.length === 0)
    return (
      <div className="rounded-lg shadow-md bg-financesBg bg-contain bg-no-repeat bg-right-4 relative">
        <div className=" my-1 h-full flex flex-col gap-1 absolute bg-white/70 w-full rounded-lg justify-center items-center">
          <h1 className=" font-bold">No movements registered yet today</h1>
        </div>
      </div>
    );

  if (data)
    return (
      <div className="flex flex-col justify-between p-5 border border-none rounded-lg shadow-md bg-financesBg bg-[length:250px_150px] bg-no-repeat bg-right-5">
        <h1 className=" font-bold text-2xl text-nice-red">Today's Expenses</h1>
        <div className=" my-1 h-full flex flex-col gap-1 ">
          {data.slice(0, 3).map((expense) => (
            <ExpensesCard
              name={expense.name}
              time={expense.createdAt}
              quantity={expense.quantity}
            />
          ))}
        </div>
        <div className=" flex gap-2">
          <p>
            Showing {Math.min(3, data.length)} of {data.length}
          </p>
          <Link to={"/health"} className=" text-nice-red">
            view all
          </Link>
        </div>
      </div>
    );

  if (!data)
    return (
      <div className="rounded-lg shadow-md bg-financesBg bg-contain bg-no-repeat bg-right-4 relative">
        <div className=" my-1 h-full flex flex-col gap-1 absolute bg-white/70 w-full rounded-lg justify-center items-center">
          <h1 className=" font-bold">No data yet</h1>
        </div>
      </div>
    );
}
