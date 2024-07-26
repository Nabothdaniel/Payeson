import React from "react";
import DashboardHeader from "../components/Dashboard/DashboardHeader";
import DashboardBalance from "../components/Dashboard/DashboardBalance";
import DashboardServices from "../components/Dashboard/DashboardServices";
import DashboardPendingActions from "../components/Dashboard/DashboardPendingActions";
import DashboardNav from "../components/Dashboard/DashboardNav";

function Dashboard() {
  return (
    <div className=" md:px-10 xl:px-72 relative z-10 overflow-y-scroll h-full">
      <DashboardHeader />
      <DashboardBalance />
      <DashboardServices />
      <DashboardPendingActions />
      <DashboardNav />
    </div>
  );
}

export default Dashboard;
