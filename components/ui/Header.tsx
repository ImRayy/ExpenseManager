import { ChevronLeft, Calendar } from "lucide-react";
import { useRouter } from "next/router";
import Button from "./Button";
import React from "react";

interface HeaderProps {
  isFixed: boolean;

  showPathName?: boolean;
  customTxt?: string;
  userPhotoURL?: string;
  customButtonClass?: string;
  buttonFunc?: () => void;
}
const Header = ({
  isFixed,
  showPathName,
  customTxt,
  userPhotoURL,
  customButtonClass,
  buttonFunc,
}: HeaderProps) => {
  const router = useRouter();
  const month = new Date().toString().split(" ")[1];
  return (
    <div
      className={`${
        isFixed ? "fixed left-0 top-0 z-50 backdrop-blur-sm" : "block"
      } flex w-full items-center text-xl font-bold `}
    >
      <div className="flex w-full items-center justify-between p-4 text-lg font-semibold">
        <span className="flex items-center gap-4">
          {router.pathname !== "/dashboard" ? (
            <Button
              variant="secondary"
              size="equal"
              className={`${customButtonClass} relative z-20 `}
              onClick={() => router.back()}
            >
              <ChevronLeft />
            </Button>
          ) : (
            <span className="flex gap-1">
              <p>Hi,</p>
              <p className="text-blue-600">{customTxt || "User"}</p>
            </span>
          )}
        </span>

        {/* Pathname */}
        {showPathName && (
          <div className="absolute left-0 w-full text-center font-medium capitalize tracking-wide text-white">
            {router.pathname.split("/")[1]}
          </div>
        )}
        <span className="flex items-center gap-2">
          {!showPathName && (
            <span className="flex items-center gap-1 rounded-full border px-4  py-2 text-sm font-semibold uppercase">
              <Calendar size={18} />
              {month}
            </span>
          )}
          {router.pathname === "/dashboard" && (
            <img
              src={
                userPhotoURL ||
                "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
              }
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
