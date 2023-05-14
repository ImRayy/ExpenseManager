import { Home, History, Wallet, User, Plus } from "lucide-react";
import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";
const NavigationBar = () => {
  const router = useRouter();
  return (
    <div className="fixed bottom-0 flex  w-full select-none flex-col justify-end  px-4 py-4 text-black">
      <div className="relative flex h-32 w-full items-end">
        <div className="flex h-16 w-full items-center justify-between rounded-xl border bg-white bg-opacity-80 px-6  backdrop-blur-sm">
          {/* Left two icons */}
          <Link
            href="/"
            className={`z-20 cursor-pointer ${
              router.pathname === "/" && "text-blue-500"
            }`}
          >
            <Home size={22} />
          </Link>
          <History size={22} />
          {/* Center button */}
          {/* <div className="w-4"></div> */}
          {/* <div className="absolute left-0 flex w-full justify-center pb-8"> */}
          {/*   <span className="mb-4 flex h-14 w-14 items-center rounded-full bg-blue-500 text-white shadow-lg shadow-blue-200"> */}
          {/*     <Plus size={22} className="w-full" /> */}
          {/*   </span> */}
          {/* </div> */}
          {/* Right two icons */}
          <Link
            href="/accounts"
            className={`z-20 cursor-pointer ${
              router.pathname === "/accounts" && "text-blue-500"
            }`}
          >
            <Wallet size={22} />
          </Link>
          <User size={22} />
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
