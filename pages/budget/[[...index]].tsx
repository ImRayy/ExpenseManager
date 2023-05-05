import { GetServerSidePropsContext, InferGetStaticPropsType } from "next";
import Categories from "@/components/Budget/Categories";
import { Download, Upload } from "lucide-react";
import PieChart from "@/components/ui/Chart";
import Header from "@/components/ui/Header";
import Title from "@/components/ui/Title";
import React from "react";

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { index } = ctx.query;
  return {
    props: { index },
  };
};
const Budget = ({
  index,
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
  return (
    <div className="flex min-h-screen flex-col items-center gap-4 px-4 pt-20 ">
      <Header isFixed={true} />
      {/* Title */}
      <Title title={index?.toString()} currency="inr" amount="22,898.00" />
      {/* Chart */}
      <section className="relative mb-5 w-2/4 rounded-full bg-white p-2">
        <PieChart />
        <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
          {index?.toString() === "income" ? (
            <Download className="text-gray-500" size={40} />
          ) : (
            <Upload className="text-gray-500" size={40} />
          )}
        </div>
      </section>
      {/* Categories */}
      <Categories />
    </div>
  );
};

export default Budget;
