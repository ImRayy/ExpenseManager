import { Home, History, Wallet, User, Plus } from "lucide-react";
import Link from "next/link";
import React from "react";
const NavigationBar = () => {
  return (
    <div
      className="fixed bottom-0 flex h-20 w-full select-none justify-around rounded-lg px-4 py-4 text-black
"
    >
      <Link href="/" className="mt-auto cursor-pointer">
        <Home size={18} />
      </Link>
      <History size={18} className="mt-auto" />
      <span className="flex h-10 w-10 items-center rounded-full bg-blue-500 text-white shadow-lg shadow-blue-200">
        <Plus size={18} className="w-full" />
      </span>
      <Link href="/accounts" className="mt-auto cursor-pointer">
        <Wallet size={18} />
      </Link>
      <User size={18} className="mt-auto" />
    </div>
  );
};

export default NavigationBar;
