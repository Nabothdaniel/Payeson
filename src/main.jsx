import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./tailwind.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/main/Home.jsx";
import Login from "./pages/main/Login.jsx";
import Register from "./pages/main/Register.jsx";
import Dashboard from "./pages/main/Dashboard.jsx";
import Notifications from "./pages/utils/Notifications.jsx";
import SetPin from "./pages/utils/SetPin.jsx";
import TransactionHistory from "./pages/utils/TransactionHistory.jsx";
import ForgotPassword from "./pages/utils/ForgotPassword.jsx";
import RegisterVerified from "./components/Verified/RegisterVerified.jsx";
import BankDetails from "./pages/utils/BankDetails.jsx";
import Support from "./pages/navpages/Support.jsx";
import Profile from "./pages/navpages/Profile.jsx";
import Airtime from "./pages/services/Airtime.jsx";
import Data from "./pages/services/Data.jsx"
import Tv from "./pages/services/Tv.jsx";
import Electricity from "./pages/services/Electricity.jsx"
import Wallet from "./pages/navpages/Wallet.jsx";
import Withdraw from "./pages/main/Withdraw.jsx";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/setpin",
        element: <SetPin />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/notifications",
        element: <Notifications />,
      },
      {
        path: "/history",
        element: <TransactionHistory />,
      },
      {
        path: "/resetpassword",
        element: <ForgotPassword />,
      },
      {
        path: "/verified",
        element: <RegisterVerified />,
      },
      {
        path: "/bankdetails",
        element: <BankDetails />,
      },
      {
        path: "/support",
        element: <Support />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/airtime",
        element: <Airtime />,
      },
      {
        path: "/data",
        element: <Data />,
      },
      {
        path: "/television",
        element: <Tv />,
      },
      {
        path: "/electricity",
        element: <Electricity/>,
      },
      {
        path: "/wallet",
        element: <Wallet/>,
      },
      {
        path: "/withdraw",
        element: <Withdraw/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
