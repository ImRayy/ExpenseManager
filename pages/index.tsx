import InfoCards from "@/components/home/InfoCards";
import Title from "@/components/ui/Title";
import { Calendar } from "lucide-react";
import React from "react";

const Home = () => {
  return (
    <div className="flex w-full flex-col gap-2 px-4">
      {/* Header */}
      <section className="mb-2 mt-3 flex h-14 w-full items-center justify-between text-sm text-black">
        <div className="flex flex-col">
          <span className="text-lg font-semibold text-gray-500">
            Good Morning!
          </span>
          <span className="text-xl font-extrabold">Ray</span>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <span className="flex gap-1 rounded-full border px-5 py-2.5">
            <Calendar size={20} />
            May
          </span>
        </div>
      </section>
      {/* Info */}
      <section className="mb-3">
        <Title amount="19,932.00" currency="inr" />
      </section>
      <InfoCards income={0.0} expenses={0.0} />
    </div>
  );
};

export default Home;
