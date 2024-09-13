import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import DashBoardView from "./views/DashBoardView";
import FinanceView from "./views/FinanceView";
import HealthView from "./views/Health/HealthView";
import ReportsView from "./views/Reports/ReportsView";
import AuthLayout from "./layouts/AuthLayout";
import LoginView from "./views/Auth/LoginView";
import RegisterView from "./views/Auth/RegisterView";
import ConfirmAccountView from "./views/Auth/ConfirmAccountView";

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

        <Route element={<AuthLayout />}>
          <Route path="/auth/login" element={<LoginView />} />
          <Route path="/auth/register" element={<RegisterView />} />
          <Route
            path="/auth/confirm-account"
            element={<ConfirmAccountView />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
