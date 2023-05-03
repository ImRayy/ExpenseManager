import React from "react";

interface TitleProps {
  title?: string;
  amount?: string;
  currency: "inr" | "dollar";
}

const Title = ({ title, amount, currency }: TitleProps) => {
  return (
    <section className="flex w-full flex-col gap-2">
      <span>Income</span>
      <span className="space-x-2 text-xl">
        <span className="font-extrabold">{amount}</span>
        <span className="font-normal uppercase">{currency}</span>
      </span>
    </section>
  );
};

export default Title;
