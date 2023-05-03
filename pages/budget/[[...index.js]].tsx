import Categories from "@/components/Budget/Categories";
import PieChart from "@/components/ui/Chart";
import Title from "@/components/ui/Title";
import { Download } from "lucide-react";
import React from "react";
const Budget = () => {
  return (
    <div className="flex min-h-screen flex-col items-center gap-4 px-4 pt-4">
      {/* Title */}
      <Title title="Income" currency="inr" amount="22,898.00" />
      {/* Chart */}
      <section className="relative mb-5 w-2/4 rounded-full bg-white p-2">
        <PieChart />
        <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
          <Download className="text-gray-500" />
        </div>
      </section>
      {/* Categories */}
      <Categories />
    </div>
  );
};

export default Budget;
