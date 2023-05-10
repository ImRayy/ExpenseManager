import { accountDetailTypes, accountTypes } from "@/types/interface";
import { useCollectionData } from "react-firebase-hooks/firestore";
import LogCard from "@/components/account/LogCard";
import { ammountCalcHandler } from "@/lib/helpers";
import React, { useEffect, useState } from "react";
import { collection } from "firebase/firestore";
import Card from "@/components/account/Card";
import Header from "@/components/ui/Header";
import Title from "@/components/ui/Title";
import { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import { db } from "@/lib/clientApp";
const Account = () => {
  const dataRef = (type: string) => {
    return collection(
      db,
      "users",
      "0.653159755779475",
      "accounts",
      router.asPath.split("/")[2],
      type
    );
  };
  const router = useRouter();
  const accountId = router.asPath.split("/")[2];
  const [account, setAccount] = useState<accountTypes>(Object);
  const [accountDetails, setAccountDetails] =
    useState<accountDetailTypes>(Object);
  const userId = "0.653159755779475";
  const [data, loading] = useCollectionData(
    collection(db, "users", userId, "accounts")
  );

  const [income, incomeLoading] = useCollectionData(dataRef("income"));
  const [expense, expenseLoading] = useCollectionData(dataRef("expense"));

  useEffect(() => {
    let totalBalance = data?.find((i) => i.id === accountId)?.amount;
    if (accountDetails.type === "income") {
      totalBalance = Number(totalBalance) + Number(accountDetails.amount);
    } else {
      totalBalance = Number(totalBalance) - Number(accountDetails.amount);
    }
    setAccount((prev) => ({
      ...prev,
      ["amount"]: totalBalance,
    }));
  }, [accountId, data, accountDetails.amount, accountDetails.type]);

  // Function to filter data by account id
  const accountDataHandler = () => {
    return data?.find((i) => i.id === accountId) as accountTypes;
  };

  if (!loading && data) {
    return (
      <div className="flex min-h-screen flex-col items-center  gap-4 bg-blue-500 pt-20 text-white">
        <Toaster position="top-center" />
        <Header isFixed={true} buttonFunc={() => router.replace("/accounts")} />
        <div className="flex w-full flex-col gap-4 px-4">
          <Title
            title="Cash"
            amount={accountDataHandler().amount.toString()}
            currency="inr"
          />

          {/* Incormation cards */}
          <div className="flex h-full w-full justify-between gap-4">
            <Card
              accountDetails={accountDetails}
              setAccountDetails={setAccountDetails}
              userId={userId}
              accountId={accountId}
              account={account}
              label="income"
              amount={
                (!incomeLoading && income && ammountCalcHandler(income)) || 0
              }
              transactions={income?.length || 0}
            />
            <Card
              accountDetails={accountDetails}
              setAccountDetails={setAccountDetails}
              userId={userId}
              accountId={accountId}
              account={account}
              label="expense"
              amount={
                (!expenseLoading && expense && ammountCalcHandler(expense)) || 0
              }
              transactions={expense?.length || 0}
            />
          </div>
        </div>
        <div className="flex min-h-[40rem] w-full flex-col gap-4 rounded-t-3xl bg-white px-4 pb-28 pt-10">
          {!incomeLoading && income && !expenseLoading && expense && (
            <LogCard income={income} expense={expense} />
          )}
        </div>
      </div>
    );
  }
};

export default Account;
