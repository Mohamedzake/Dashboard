import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import Analytics from "./features/dashboard/Analytics";
import SaaS from "./features/dashboard/SaaS";
import Profile from "./features/pages/Profile";
import Settings from "./features/pages/Settings";
import Pricing from "./features/pages/Pricing";
import Chat from "./features/pages/Chat";
import Blank from "./features/pages/Blank";
import Projects from "./pages/Projects";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import Tasks from "./pages/Tasks";
import Calendar from "./pages/Calendar";
import List from "./features/Invoices/List";
import Detail from "./features/Invoices/Detail";
import SignIn from "./features/auth/SignIn";
import SignUp from "./features/auth/SignUp";
import SignInCover from "./features/auth/SignInCover";
import SignUpCover from "./features/auth/SignUpCover";
import Resetpassword from "./features/auth/Resetpassword";
import ResetpasswordCover from "./features/auth/ResetpasswordCover";
import Page404Error from "./features/auth/Page404Error";
import Page500Error from "./features/auth/Page500Error";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="dashboard/analytics" element={<Analytics />} />
          <Route path="dashboard/saaS" element={<SaaS />} />

          <Route path="pages/profile" element={<Profile />} />
          <Route path="pages/settings" element={<Settings />} />
          <Route path="pages/pricing" element={<Pricing />} />
          <Route path="pages/chat" element={<Chat />} />
          <Route path="pages/blank" element={<Blank />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/products" element={<Products />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/invoices/list" element={<List />} />
          <Route path="/invoices/detail" element={<Detail />} />
        </Route>
        {/* outPath */}
        <Route path="/auth/sign-in" element={<SignIn />} />
        <Route path="/auth/sign-up" element={<SignUp />} />

        <Route path="/auth/reset-password" element={<Resetpassword />} />
        <Route
          path="/auth-cover/reset-password"
          element={<ResetpasswordCover />}
        />
        <Route path="/error/404" element={<Page404Error />} />
        <Route path="/error/500" element={<Page500Error />} />
        <Route path="/auth-cover/sign-in" element={<SignInCover />} />
        <Route path="/auth-cover/sign-up" element={<SignUpCover />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
