import React from "react";
interface CategoryProps {
  label: string;
  money: number;
  percentage: number;
  children: React.ReactNode;
}
const Category = ({ children, label, money, percentage }: CategoryProps) => {
  return (
    <div className="flex w-full justify-between rounded-xl bg-white p-4 shadow-md">
      <div className="flex gap-5">
        <span className="flex items-center justify-center">{children}</span>
        <div className="flex flex-col justify-start">
          <span className="text-sm">{label}</span>
          <span className="font-semibold">
            {money} <span className="font-light">INR</span>
          </span>
        </div>
      </div>
      <div className="text-sm font-light text-gray-600 ">{percentage}%</div>
    </div>
  );
};

export default Category;
