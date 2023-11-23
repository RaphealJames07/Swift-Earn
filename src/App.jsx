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
import Transfer from "./Pages/TransferFunds/Transfer";
import Profile from "./Pages/Profile/Profile";
import TradingPlans from "./Pages/TradingPlans/TradingPlans";
import MyPlans from "./Pages/MyPlans/MyPlans";
import Referrals from "./Pages/Referrals/Referrals";
import Login from "./Pages/Auth/Login";
// import {BrowserRouter, Route, Routes} from "react-router-dom";
// import Login from "./Pages/Auth/Login";
// import Register from "./Pages/Auth/Register";
// import HomeE from "./HomeE";
// import Dashboard from "./Components/Dashboard/Dashboard";
// import DashHome from "./Pages/DashHome/DashHome";
// import Deposit from "./Pages/Deposit/Deposit";
// import Deposit from "./Pages/Deposit/Deposit";

// const App = () => {
//     return (
//         <>
//             <BrowserRouter>
//                 <Routes>
//                     <Route path="/" element={<HomeE />} />
//                     <Route path="/login" element={<Login />} />
//                     <Route path="/register" element={<Register />} />
//                     <Route
//                         path="/dashboard"
//                         element={
//                             <Dashboard>
//                                 {/* Nested routes */}
//                                 <Route index element={<DashHome />} />
//                                 <Route path="/deposit" element={<Deposit />} />
//                                 {/* Add more nested routes as needed */}
//                             </Dashboard>
//                         }
//                     />
//                 </Routes>
//             </BrowserRouter>
//         </>
//     );
// };

// export default App;

// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import HomeE from './HomeE';
// import Login from './Pages/Auth/Login';
// import Register from './Pages/Auth/Register';
// import Dashboard from './Components/Dashboard/Dashboard';
// import DashHome from './Pages/DashHome';
// import Deposit from './Pages/Deposit';

// const App = () => {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<HomeE />} />
//           <Route
//             path="/*"
//             element={
//               <Dashboard>
//                 {/* Nested routes */}
//                 <Route index element={<DashHome />} />
//                 <Route path="deposit" element={<Deposit/>} />
//                 {/* Add more nested routes as needed */}
//               </Dashboard>
//             }
//           />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// };

// export default App;

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

