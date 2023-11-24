import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./Components/ScrollToTop";
import HomeRoute from "./routes/HomeRoute";
import Dashboard from "./Components/Dashboard/Dashboard";
import DashHome from "./Pages/DashHome/DashHome";
import Deposit from "./Pages/Deposit/Deposit";
import Withdrawal from "./Pages/Withdrawal/Withdrawal";
import ProfitHistory from "./Pages/ProfitHistory/ProfitHistory";
import Transactions from "./Pages/Transactions/Transactions";
import Transfer from "./Pages/TransferFunds/TransferFunds";
import Profile from "./Pages/Profile/Profile";
import TradingPlans from "./Pages/TradingPlans/TradingPlans";
import MyPlans from "./Pages/MyPlans/MyPlans";
import Referrals from "./Pages/Referrals/Referrals";
import Login from "./Pages/Auth/Login";
import ConfirmPassword from "./Pages/Withdrawal/ConfirmPassword";
import WithdrawFunds from "./Pages/Withdrawal/WithdrawFunds";


const router = createBrowserRouter([
  {
    path: "/",
    element: <>
      <ScrollToTop/>
      <HomeRoute/>
    </>,
  },
  {
    path: "login",
    element: <>
    <ScrollToTop/>
    <Login/>
    </>
  },
  {
    path: "user/confirm-password",
    element: <>
    <ScrollToTop/>
    <ConfirmPassword/>
    </>
  },
  {
    path:"dashboard",
    element:<Dashboard/>,
    children: [
      {
        path: "",
        element: <DashHome/>,
      },
      {
        path: "deposit",
        element: <Deposit/>,
      },
      {
        path: "withdrawal",
        element: <Withdrawal/>,
      },
      {
        path: "withdraw-funds",
        element: <WithdrawFunds/>,
      },
      {
        path: "profit-history",
        element: <ProfitHistory/>,
      },
      {
        path: "transactions",
        element: <Transactions/>,
      },
      {
        path: "transfer-funds",
        element: <Transfer/>,
      },
      {
        path: "profile",
        element: <Profile/>,
      },
      {
        path: "trading-plans",
        element: <TradingPlans/>,
      },
      {
        path: "my-plans",
        element: <MyPlans/>,
      },
      {
        path: "referrals",
        element: <Referrals/>,
      },
    ]
  }
]);

function App() {
  
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App

