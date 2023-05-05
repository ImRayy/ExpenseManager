import Button from "../ui/Button";
import React from "react";

const Card = () => {
  return (
    <div className="flex w-full flex-col gap-3 rounded-2xl bg-white p-4  font-bold text-black opacity-70">
      <span className="uppercase">Income</span>
      <span>
        21,281.00
        <span className="block whitespace-nowrap font-normal">
          Indian Rupee
        </span>
      </span>
      <span className="text-lg font-bold">
        12
        <span className="block font-normal">transactions</span>
      </span>
      <Button variant="secondary">Add Income</Button>
    </div>
  );
};

export default Card;
