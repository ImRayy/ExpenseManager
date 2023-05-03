import { Home, History, Wallet, User, Plus } from "lucide-react";
import Link from "next/link";
import React from "react";
const NavigationBar = () => {
  return (
    <div
      className="fixed bottom-0 flex h-24 w-full select-none justify-around rounded-lg px-4 py-4 text-black
"
    >
      <Link href="/" className="mt-auto cursor-pointer">
        <Home size={22} />
      </Link>
      <History size={22} className="mt-auto" />
      <span className="mb-4 flex h-14 w-14 items-center rounded-full bg-blue-500 text-white shadow-lg shadow-blue-200">
        <Plus size={22} className="w-full" />
      </span>
      <Link href="/accounts" className="mt-auto cursor-pointer">
        <Wallet size={22} />
      </Link>
      <User size={22} className="mt-auto" />
    </div>
  );
};

export default NavigationBar;
