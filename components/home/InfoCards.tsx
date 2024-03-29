import { Download, Upload } from "lucide-react";
import { useRouter } from "next/router";
import Card from "../ui/Card";
import React from "react";
interface InfoCardsProps {
  income: string;
  expense: string;
}
const InfoCards = ({ income, expense }: InfoCardsProps) => {
  const router = useRouter();
  return (
    <div className="flex w-full gap-4">
      <Card variant="green" size="default" className="font-bold">
        <div
          className="flex flex-col justify-center gap-4 text-xs text-white drop-shadow-sm"
          onClick={() => router.push("/budget/income")}
        >
          <span className="flex items-center gap-2">
            <Download size={14} />
            Income
          </span>
          <span className="text-2xl">₹ {income}</span>
        </div>
      </Card>
      <Card variant="black" size="default" className="font-bold">
        <div
          className="flex flex-col justify-center gap-4 text-xs text-white drop-shadow-sm"
          onClick={() => router.push("/budget/expenses")}
        >
          <span className="flex items-center gap-2">
            <Upload size={14} />
            Expenses
          </span>
          <span className="text-2xl">₹ {expense}</span>
        </div>
      </Card>
    </div>
  );
};

export default InfoCards;
