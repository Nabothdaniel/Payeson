import React from 'react'
import { Link } from 'react-router-dom'

function BankDetailsPending() {
  return (
    <div className="bg-purple-400/40 flex justify-between item-center px-3 py-4 rounded-md my-2">
    <span className="font-semibold text-[.9rem]">Set Transaction Pin</span>
    <Link
      to="/setpin"
      className="font-semibold text-[.9rem] text-purple-700"
    >
      Set Pin
    </Link>
  </div>
  )
}

export default BankDetailsPending