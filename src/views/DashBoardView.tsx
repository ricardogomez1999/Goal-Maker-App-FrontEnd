import CalendarCard from "../components/Dashboard/CalendarCard";
import SummaryCalories from "../components/Dashboard/DashboardSummaries/SummaryCalories";
import SummaryConsumedCalories from "../components/Dashboard/DashboardSummaries/SummaryConsumedCalories";
import SummaryExpenses from "../components/Dashboard/DashboardSummaries/SummaryExpenses";
import SummaryIncomes from "../components/Dashboard/DashboardSummaries/SummaryIncomes";
import TodaysActivities from "../components/Dashboard/TodaysActivities";
import TodaysFinances from "../components/Dashboard/TodaysFinances";
import TodaysMeal from "../components/Dashboard/TodaysMeals";
import WelcomeCard from "../components/Dashboard/WelcomeCard";

export default function DashBoardView() {
  return (
    <div className=" flex flex-col w-full h-full gap-10">
      <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-2 gap-8 h-5/6">
        <WelcomeCard />
        <CalendarCard />
        <TodaysActivities />
        <TodaysMeal />
        <TodaysFinances />
      </div>
      <div className="grid grid-flow-row-dense grid-cols-4 grid-rows-1 gap-5 h-1/6 w-full">
        <SummaryCalories />
        <SummaryConsumedCalories />
        <SummaryExpenses />
        <SummaryIncomes />
      </div>
    </div>
  );
}
