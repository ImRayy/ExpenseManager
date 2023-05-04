import { Wallet } from "lucide-react";
import Input from "../ui/Input";
import React from "react";
const NewAccount = () => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <span className="rounded-full bg-blue-500 p-4 text-white">
          <Wallet />
        </span>
        <span className="mb-auto mr-4 w-full">
          <Input id="account" />
        </span>
      </div>
    </div>
  );
};

export default NewAccount;
