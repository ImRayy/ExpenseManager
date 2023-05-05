import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/router";
import Button from "./Button";
import React from "react";

interface HeaderProps {
  isFixed: boolean;
  buttonFunc?: () => void;
}
const Header = ({ isFixed, buttonFunc }: HeaderProps) => {
  const router = useRouter();
  return (
    <div
      className={`${
        isFixed ? "fixed left-0 top-0 z-50 backdrop-blur-sm" : "block"
      } flex w-full items-center text-xl font-bold `}
    >
      <div className="flex w-full items-center justify-between p-4">
        <span className="flex items-center gap-4">
          {router.pathname !== "/" ? (
            <Button variant="secondary" size="equal" onClick={buttonFunc}>
              <ChevronLeft />
            </Button>
          ) : (
            <span>Hi, RAY!</span>
          )}
        </span>
        <span className="flex items-center gap-2">
          <span className="rounded-full border-2 px-4 py-1 text-lg">May</span>
          {router.pathname === "/" && (
            <img
              src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
              alt="profile"
              className="h-10 w-10 rounded-full"
            />
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;
