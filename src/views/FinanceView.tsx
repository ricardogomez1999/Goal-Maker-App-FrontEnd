import AddBudgetModal from "../components/Finances/AddBudgetModal";
import AddExpenseModal from "../components/Finances/AddExpenseModal";
import AddIncomeModal from "../components/Finances/AddIncomeModal";
import FinanceOverview from "../components/Finances/FinanceOverview";
import FinancesBudget from "../components/Finances/FinancesBudget";
import CreateFinanceMenu from "../components/Finances/FinancesComponents/CreateFinanceMenu";
import LatestTransactions from "../components/Finances/LatestTransactions";
import MonthlyExpensesChart from "../components/Finances/MonthlyExpensesChart";
import MonthlyIncomesChart from "../components/Finances/MonthlyIncomesChart";
import TransactionsModal from "../components/Finances/TransactionsModal";

export default function FinanceView() {
  return (
    <>
      <div className="flex flex-col w-full h-full gap-4">
        <div className="grid grid-cols-2 gap-4 h-full">
          <div className="flex flex-col space-y-2 ">
            <div className="flex-grow h-1/3">
              <FinanceOverview />
            </div>
            <div className="flex-grow h-1/3">
              <FinancesBudget />
            </div>
            <div className="flex-grow h-1/3">
              <LatestTransactions />
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <div className="flex-grow h-1/2 bg-white shadow p-4">
              <MonthlyExpensesChart />
            </div>
            <div className="flex-grow h-1/2 bg-white shadow p-4">
              <MonthlyIncomesChart />
            </div>
          </div>
        </div>
      </div>
      <div className=" absolute right-0 bottom-0 z-10 p-4">
        <CreateFinanceMenu />
      </div>
      <AddExpenseModal />
      <AddIncomeModal />
      <TransactionsModal />
      <AddBudgetModal />
    </>
  );
}
