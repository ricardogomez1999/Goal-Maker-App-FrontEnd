import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import DashBoardView from "./views/DashBoardView";
import FinanceView from "./views/FinanceView";
import HealthView from "./views/Health/HealthView";
import ReportsView from "./views/Reports/ReportsView";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<DashBoardView />} />
          <Route path="/finance" element={<FinanceView />} />
          <Route path="/health" element={<HealthView />} />
          <Route path="/reports" element={<ReportsView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
