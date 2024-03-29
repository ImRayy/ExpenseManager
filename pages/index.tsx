import StickyButton from "@/components/ui/StickyButton";
import Badge from "@/components/ui/Badge";
import { useRouter } from "next/router";
import React from "react";

const Home = () => {
  const router = useRouter();
  return (
    <div className="flex min-h-screen flex-col bg-zinc-900 p-4">
      {/* TITLE */}
      <div className="mb-5 bg-abstruct bg-clip-text object-cover object-center font-extrabold text-transparent">
        <span className="text-[4rem] ">Expense</span>
        <span className="flex gap-2 text-[2rem]">
          Manager
          <Badge label="Beta" />
        </span>
      </div>

      {/* SHORT DESCRIPTION */}
      <p className="text-lg font-medium text-white">
        Why put unnecessary strain on your brain when you have the internet and
        a smartphone? With just a few minutes of setup, you can start tracking
        your expenses easily!
      </p>

      {/* BOTTOM BUTTON */}
      <StickyButton
        onClick={() => router.push("/signin")}
        label="Try out now!"
      />
    </div>
  );
};

export default Home;
