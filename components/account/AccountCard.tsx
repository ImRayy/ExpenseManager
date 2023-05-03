import { CreditCard, Trash } from "lucide-react";
import React from "react";

const AccountCard = () => {
  return (
    <div className="w-full rounded-lg bg-gradient-to-r from-gray-900 to-gray-600 p-4 text-sm text-white shadow-lg shadow-gray-400">
      <div className="flex flex-col gap-6">
        <div className="relative flex gap-2">
          <CreditCard size={18} />
          <span className="flex flex-col">
            <span className="text-sm">BANK NAME</span>
            <span className="text-xs">HOLDER NAME</span>
          </span>
          <Trash size={18} className="absolute right-0" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs">Total Balance</span>
          <span className="text-xl font-bold">
            19,000.00 <span className="font-normal">INR</span>
          </span>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-xs">Income</span>
            <span className="text-xl font-bold">
              2,787.00 <span className="font-normal">INR</span>
            </span>
          </div>
          <div className="flex flex-col text-start">
            <span className="text-xs">Expense</span>
            <span className="text-xl font-bold">
              1,644.00 <span className="font-normal">INR</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountCard;
