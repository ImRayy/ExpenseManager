import { ChevronLeft } from "lucide-react";
import Button from "./Button";
import React from "react";

interface HeaderProps {
  title: string;
  amount: string;
  currency: "inr" | "dollar";
}
const NavHeader = ({ title, amount, currency }: HeaderProps) => {
  return (
    <div className="fixed left-0 top-0 flex w-full items-center text-xl font-bold">
      <div className="flex w-full items-center gap-4 p-4">
        <Button variant="secondary" rounded="lg" size="equal">
          <ChevronLeft />
        </Button>
        <div className="flex w-full justify-between">
          {title}
          <span className="text-lg">
            {amount} <span className="font-light uppercase">{currency}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavHeader;
