import Button from "../ui/Button";
import React from "react";

interface CardProps {
  label: string;
  amount: number;
  buttonFunc: () => void;
}
const Card = ({ label, amount, buttonFunc }: CardProps) => {
  return (
    <div className="flex w-full flex-col gap-3 rounded-2xl bg-white p-4  font-bold text-black opacity-70">
      <span className="uppercase">{label}</span>
      <span>
        {amount || "0.0"}
        <span className="block whitespace-nowrap font-normal">
          Indian Rupee
        </span>
      </span>
      <span className="text-lg font-bold">
        12
        <span className="block font-normal">transactions</span>
      </span>
      <Button variant="secondary" onClick={buttonFunc}>
        Add Income
      </Button>
    </div>
  );
};

export default Card;
