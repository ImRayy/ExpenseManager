import {
  accountDetailTypes,
  accountTypes,
  accountTransactionTypes,
} from "@/types/interface";
import { updateAccountDetails, updateAccount } from "@/lib/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import AccountDetails from "@/components/account/AccountDetails";
import LogCard from "@/components/account/LogCard";
import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { collection } from "firebase/firestore";
import Card from "@/components/account/Card";
import Header from "@/components/ui/Header";
import Title from "@/components/ui/Title";
import { useRouter } from "next/router";
import { db } from "@/lib/clientApp";

const Account = () => {
  const router = useRouter();
  const accountId = router.asPath.split("/")[2];
  const [account, setAccount] = useState<accountTypes>(Object);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [transactionsData, setTransactionsData] =
    useState<accountTransactionTypes>(Object);

  const [isOpen, setIsOpen] = useState(false);
  const userId = "0.653159755779475";
  const [accountDetails, setAccountDetails] =
    useState<accountDetailTypes>(Object);
  const [data, loading] = useCollectionData(
    collection(db, "users", userId, "accounts")
  );
  const ModalHandler = () => {
    setIsOpen(isOpen ? false : true);
  };

  useEffect(() => {
    let totalBalance = data?.find((i) => i.id === accountId)?.totalBalance;
    totalBalance = Number(totalBalance) + Number(accountDetails.amount);
    setAccount((prev) => ({
      ...prev,
      ["totalBalance"]: totalBalance,
    }));
  }, [accountId, data, accountDetails.amount, totalIncome]);

  const accountDataHandler = () => {
    return data?.find((i) => i.id === accountId) as accountTypes;
  };

  const firestoreHandler = async () => {
    // setDoc(accountRef('income'), accountDetails, { merge: true })
    if (accountDetails.dateTime !== undefined && accountDetails) {
      updateAccount(userId, accountId, account);
      updateAccountDetails(
        "income",
        router.asPath.split("/")[2],
        accountDetails.dateTime,
        accountDetails
      );
    } else {
      toast.error("Something went wrong");
    }
  };

  if (!loading && data) {
    return (
      <div className="flex min-h-screen flex-col items-center  gap-4 bg-blue-500 pt-20 text-white">
        <Toaster position="top-center" />
        <Header isFixed={true} buttonFunc={() => router.replace("/accounts")} />
        <div className="flex w-full flex-col gap-4 px-4">
          <Title
            title="Cash"
            amount={accountDataHandler().totalBalance.toString()}
            currency="inr"
          />
          <div className="flex h-full w-full justify-between gap-4">
            <Card
              buttonFunc={ModalHandler}
              label="Income"
              amount={transactionsData.income.amount}
              transactions={transactionsData.income.transactions}
            />
            <Card
              buttonFunc={ModalHandler}
              label="expense"
              amount={transactionsData.expense.amount}
              transactions={transactionsData.expense.transactions}
            />
          </div>
        </div>
        <div className="flex min-h-[40rem] w-full flex-col gap-4 rounded-t-3xl bg-white px-4 pt-10">
          <LogCard setTransactionData={setTransactionsData} />
        </div>
        <AccountDetails
          label="income"
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          buttonFunc={firestoreHandler}
          accountDetails={accountDetails}
          setAccountDetails={setAccountDetails}
        />
      </div>
    );
  }
};

export default Account;
