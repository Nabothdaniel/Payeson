import React from "react";
import { Link } from "react-router-dom";

function DashboardPendingActions() {
  return (
    <div className="m-3">
      <div className="bg-purple-400/40 flex justify-between item-center px-3 py-4 rounded-md my-2">
        <span className="font-semibold text-[.9rem]">Set Transaction Pin</span>
        <Link
          to="/setpin"
          className="font-semibold text-[.9rem] text-purple-700"
        >
          Set Pin
        </Link>
      </div>
      <div className="bg-purple-400/40 flex justify-between item-center px-3 py-4 rounded-md my-2">
        <span className="font-semibold text-[.9rem]">Add Bank Details</span>
        <Link to='/bankdetails' className="font-semibold text-[.9rem] text-purple-700">
          Add details
        </Link>
      </div>
      <div className="bg-purple-400/40 flex justify-between item-center px-3 py-4 rounded-md my-2">
        <span className="font-semibold text-[.9rem]">Set Profile Picture</span>
        <Link to='/profile' className="font-semibold text-[.9rem] text-purple-700">
          Set profile
        </Link>
      </div>
    </div>
  );
}

export default DashboardPendingActions;
