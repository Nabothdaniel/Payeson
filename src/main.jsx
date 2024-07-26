import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./tailwind.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Notifications from "./pages/Notifications.jsx";
import SetPin from "./pages/SetPin.jsx";
import TransactionHistory from "./pages/TransactionHistory.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import RegisterVerified from "./components/Verified/RegisterVerified.jsx";
import BankDetails from "./pages/BankDetails.jsx";
import Support from "./pages/navpages/Support.jsx";
import Profile from "./pages/navpages/Profile.jsx";
import Airtime from "./pages/services/Airtime.jsx";

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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
