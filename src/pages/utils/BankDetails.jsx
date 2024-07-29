import React from "react";
import { Link } from "react-router-dom";
import LoginRight from "../../components/login/LoginRight";
import BankDetailsPending from "../../components/BankDetails/BankDetailsPending";
import BankDetailsForm from "../../components/BankDetails/BankDetailsForm";

function BankDetails() {
  return (
    <div className="px-4 md:px-20 xl:px-72">
      <LoginRight title="Bank details" path="/dashboard" />
      <BankDetailsPending />
      <BankDetailsForm />
    </div>
  );
}

export default BankDetails;
