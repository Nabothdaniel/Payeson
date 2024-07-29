import React from "react";
import LoginRight from "../../components/login/LoginRight";
import WithdrawForm from "../../components/withdraw/WithdrawForm";
function Withdraw() {
  const networkOptions = ["Keystone Bank PLc"];
  return (
    <div className="mx-4 mt-3 md:mx-10 xl:px-72">
      <LoginRight title="Withdraw" path="/dashboard" />
      <WithdrawForm/>
    </div>
  );
}

export default Withdraw;
