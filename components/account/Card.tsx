import { updateAccount, updateAccountDetails } from "@/lib/firestore";
import { accountDetailTypes, accountTypes } from "@/types/interface";
import React, { SetStateAction, useState } from "react";
import { DocumentData } from "firebase/firestore";
import AccountDetails from "./AccountDetails";
import { dateTime } from "@/lib/helpers";
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
  income: DocumentData;
  expense: DocumentData;
  setAccountDetails: React.Dispatch<SetStateAction<accountDetailTypes>>;
}
const Card = ({
  label,
  amount,
  transactions,
  userId,
  accountId,
  account,
  income,
  expense,
  accountDetails,
  setAccountDetails,
}: CardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const firestoreHandler = async () => {
    const accAppendDetails = [];

    if (accountDetails.type === "income") {
      if (income.length !== 0) {
        for (let i = 0; i < JSON.parse(income[0].data).length; i++) {
          accAppendDetails.push(JSON.parse(income[0].data)[i]);
        }
      }
      accAppendDetails.push(accountDetails);
    } else {
      if (expense.length !== 0) {
        for (let i = 0; i < JSON.parse(expense[0].data).length; i++) {
          accAppendDetails.push(JSON.parse(expense[0].data)[i]);
        }
      }
      accAppendDetails.push(accountDetails);
    }

    const finalData = {
      data: JSON.stringify(accAppendDetails),
    };
    if (
      accountDetails.dateTime !== undefined &&
      accountDetails.title !== "" &&
      accountDetails
    ) {
      updateAccount(userId, accountId, account);
      updateAccountDetails(
        userId,
        label,
        accountId,
        dateTime({ time: false, hideDay: true }),
        finalData
      );
      toast.success(`Successfully added ${label}`);
      setIsOpen(false);
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
        accountName={account.accountName}
        setIsOpen={setIsOpen}
        buttonFunc={firestoreHandler}
        accountDetails={accountDetails}
        setAccountDetails={setAccountDetails}
      />
    </div>
  );
};

export default Card;
