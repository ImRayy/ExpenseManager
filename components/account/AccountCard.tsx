import { CreditCard, Trash } from "lucide-react";
import React from "react";
interface AccountCardProps {
  accountName: string;
  totalBalance: number;
  income: number;
  expense: number;
  currency: "inr" | "dollar";
  color?: string;
}
const AccountCard = ({
  accountName,
  totalBalance,
  income,
  expense,
  currency,
  color,
}: AccountCardProps) => {
  return (
    <div
      className={`w-full  rounded-lg p-4 text-sm text-white ${
        color || "bg-zinc-900"
      }`}
    >
      <div className="flex flex-col gap-8">
        <div className="relative flex items-center gap-2">
          <CreditCard size={18} />
          <span className="flex flex-col">
            <span className="text-lg">{accountName}</span>
          </span>
          <Trash size={18} className="absolute right-0" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs">Total Balance</span>
          <span className="text-xl font-bold">
            {totalBalance}
            <span className="ml-2 font-normal uppercase">{currency}</span>
          </span>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-xs">Income</span>
            <span className="text-xl font-bold">
              {income} <span className="font-normal uppercase">{currency}</span>
            </span>
          </div>
          <div className="flex flex-col text-start">
            <span className="text-xs">Expense</span>
            <span className="text-xl font-bold">
              {expense}
              <span className="ml-2 font-normal uppercase">{currency}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountCard;
