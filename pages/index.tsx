import Button from "@/components/ui/Button";
import { useRouter } from "next/router";
import React from "react";

const Home = () => {
  const router = useRouter();
  return (
    <div className="flex min-h-screen flex-col bg-black p-4">
      <div className="mb-5 bg-abstruct bg-clip-text object-cover object-center font-extrabold text-transparent">
        <span className="text-[4rem] ">Expense</span>
        <span className="block text-[2rem]">Manager</span>
      </div>
      <p className="mb-10 text-lg font-medium text-white">
        Why put unnecessary strain on your brain when you have the internet and
        a smartphone? With just a few minutes of setup, you can start tracking
        your expenses easily!
      </p>
      <div>
        <Button
          className="bg-gradient-to-r from-blue-500 to-blue-700 px-6 shadow-md shadow-blue-800 "
          onClick={() => router.push("/signin")}
        >
          Let&apos;s get started!
        </Button>
      </div>
    </div>
  );
};

export default Home;
