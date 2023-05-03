import InfoCards from "@/components/home/InfoCards";
import { Calendar } from "lucide-react";
import React from "react";

const Home = () => {
  return (
    <div className="flex w-full flex-col gap-2 px-4">
      {/* Header */}
      <section className="mb-2 mt-1 flex h-14 w-full items-center justify-between text-sm text-black">
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-gray-500">
            Good Morning!
          </span>
          <span className="font-extrabold">Ray</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex gap-1 rounded-full border px-4 py-1">
            <Calendar size={16} />
            May
          </span>
        </div>
      </section>
      <InfoCards income={0.0} expenses={0.0} />
    </div>
  );
};

export default Home;
