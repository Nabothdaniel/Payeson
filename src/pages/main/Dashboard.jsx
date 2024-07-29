import React from "react";
import DashboardHeader from "../../components/Dashboard/DashboardHeader";
import DashboardBalance from "../../components/Dashboard/DashboardBalance";
import DashboardServices from "../../components/Dashboard/DashboardServices";
import DashboardPendingActions from "../../components/Dashboard/DashboardPendingActions";
import DashboardNav from "../../components/Dashboard/DashboardNav";

function Dashboard() {
  return (
    <div className=" md:px-10 xl:px-72 relative z-10 overflow-visible h-full">
      <DashboardHeader />
      <DashboardBalance />
      <DashboardServices />
      <DashboardPendingActions />
      <div className="fixed z-[999] bottom-0 left-0 right-0">
     <DashboardNav />
      </div>
    
    </div>
  );
}

export default Dashboard;
