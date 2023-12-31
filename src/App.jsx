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
import Payment from "./Pages/Deposit/Payment";


const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <ScrollToTop />
                <HomeRoute />
            </>
        ),
    },
    {
        path: "login",
        element: (
            <>
                <ScrollToTop />
                <Login />
            </>
        ),
    },
    {
        path: "user/confirm-password",
        element: (
            <>
                <ScrollToTop />
                <ConfirmPassword />
            </>
        ),
    },
    {
        path: "dashboard",
        element: <Dashboard />,
        children: [
            {
                path: "",
                element: (
                    <>
                        <ScrollToTop />,
                        <DashHome />,
                    </>
                ),
            },
            {
                path: "deposit",
                element: (
                    <>
                        <ScrollToTop />,
                        <Deposit />,
                    </>
                ),
            },
            {
                path: "deposit/payment",
                element: (
                    <>
                        <ScrollToTop />,
                        <Payment />,
                    </>
                ),
            },
            {
                path: "withdrawal",
                element: (
                    <>
                        <ScrollToTop />,
                        <Withdrawal />,
                    </>
                ),
            },
            {
                path: "withdraw-funds",
                element: (
                    <>
                        <ScrollToTop />,
                        <WithdrawFunds />,
                    </>
                ),
            },
            {
                path: "profit-history",
                element: (
                    <>
                        <ScrollToTop />,
                        <ProfitHistory />,
                    </>
                ),
            },
            {
                path: "transactions",
                element: <>
                <ScrollToTop/>,
                <Transactions />,
                </>
            },
            {
                path: "transfer-funds",
                element: <>
                <ScrollToTop/>,
                <Transfer />,
                </>
            },
            {
                path: "profile",
                element: <>
                <ScrollToTop/>
                <Profile />,
                </>
            },
            {
                path: "trading-plans",
                element: <>
                <ScrollToTop/>,
                <TradingPlans />,
                </>
            },
            {
                path: "my-plans",
                element: <>
                <ScrollToTop/>
                <MyPlans />,
                </>
            },
            {
                path: "referuser",
                element: <>
                <ScrollToTop/>
                <Referrals />,
                </>
            },
        ],
    },
]);

function App() {
  
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App

