import { updateAccount, updateAccountDetails } from "@/lib/firestore";
import { accountDetailTypes, accountTypes } from "@/types/interface";
import React, { SetStateAction, useState } from "react";
import AccountDetails from "./AccountDetails";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import Button from "../ui/Button";

interface CardProps {
  label: "income" | "expense";
  amount: number;
  transactions: number;
  accountId: string;
  userId: string;
  account: accountTypes;
  accountDetails: accountDetailTypes;
  setAccountDetails: React.Dispatch<SetStateAction<accountDetailTypes>>;
}
const Card = ({
  label,
  amount,
  transactions,
  userId,
  accountId,
  account,
  accountDetails,
  setAccountDetails,
}: CardProps) => {
  const router = useRouter();

  // State Variables
  const [isOpen, setIsOpen] = useState(false);

  // Functions
  const firestoreHandler = async () => {
    // setDoc(accountRef('income'), accountDetails, { merge: true })
    if (accountDetails.dateTime !== undefined && accountDetails) {
      updateAccount(userId, accountId, account);
      updateAccountDetails(
        label,
        router.asPath.split("/")[2],
        accountDetails.dateTime,
        accountDetails
      );
    } else {
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="w-full">
      <div className="flex flex-col gap-3 rounded-2xl bg-white p-4 font-bold text-black opacity-70">
        <span className="uppercase">{label}</span>
        <span>
          {amount || "0.0"}
          <span className="block whitespace-nowrap font-normal">
            Indian Rupee
          </span>
        </span>
        <span className="text-lg font-bold">
          {transactions}
          <span className="block font-normal">Transactions</span>
        </span>
        <Button
          variant="secondary"
          onClick={() => setIsOpen(isOpen ? false : true)}
        >
          Add {label}
        </Button>
      </div>

      <AccountDetails
        label={label}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        buttonFunc={firestoreHandler}
        accountDetails={accountDetails}
        setAccountDetails={setAccountDetails}
      />
    </div>
  );
};

export default Card;
