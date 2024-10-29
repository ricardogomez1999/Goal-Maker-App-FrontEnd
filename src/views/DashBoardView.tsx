import CalendarCard from "../components/Dashboard/CalendarCard";
import SummaryExpenses from "../components/Dashboard/DashboardSummaries/SummaryExpenses";
import SummaryIncomes from "../components/Dashboard/DashboardSummaries/SummaryIncomes";

import TodaysFinances from "../components/Dashboard/TodaysFinances";

import WelcomeCard from "../components/Dashboard/WelcomeCard";
import FinancesBudget from "../components/Finances/FinancesBudget";

export default function DashBoardView() {
  return (
    <div className=" flex flex-col w-full h-full gap-10">
      <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-2 gap-8 h-full">
        <WelcomeCard />
        <CalendarCard />
        <TodaysFinances />
        <FinancesBudget />
        <div className=" flex flex-col  justify-around gap-5 p-5">
          <SummaryExpenses />
          <SummaryIncomes />
        </div>
      </div>
    </div>
  );
}
