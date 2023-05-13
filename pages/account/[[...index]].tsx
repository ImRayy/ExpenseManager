import { accountDetailTypes, accountTypes } from "@/types/interface";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { ammountCalcHandler, dateTime } from "@/lib/helpers";
import LogCard from "@/components/account/LogCard";
import React, { useEffect, useState } from "react";
import { collection } from "firebase/firestore";
import Card from "@/components/account/Card";
import Header from "@/components/ui/Header";
import Title from "@/components/ui/Title";
import { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import { db } from "@/lib/clientApp";

const Account = () => {
  const userId = "6f664b96-b3b5-4410-9f19-2017c24fe234";

  const dataRef = (type: string) => {
    return collection(
      db,
      "users",
      userId,
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

  const [income, incomeLoading] = useCollectionData(dataRef("income"));
  const [expense, expenseLoading] = useCollectionData(dataRef("expense"));
  const [data, loading] = useCollectionData(
    collection(db, "users", userId, "accounts")
  );

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
      <div
        className={`flex min-h-screen flex-col items-center ${
          accountDataHandler().color
        }  gap-4  pt-20 text-white`}
      >
        <Toaster position="top-center" />
        <Header isFixed={true} buttonFunc={() => router.replace("/accounts")} />
        <div className="flex w-full flex-col gap-4 px-4">
          <Title
            title={accountDataHandler().accountName}
            amount={accountDataHandler().amount.toString()}
            currency="inr"
          />

          {/* Incormation cards */}
          {!incomeLoading && income && !expenseLoading && expense && (
            <div className="flex h-full w-full justify-between gap-4">
              <Card
                accountDetails={accountDetails}
                income={income}
                expense={expense}
                setAccountDetails={setAccountDetails}
                userId={userId}
                accountId={accountId}
                account={accountDataHandler()}
                label="income"
                amount={
                  (!incomeLoading &&
                    income.length !== 0 &&
                    ammountCalcHandler(JSON.parse(income[0].data))) ||
                  0
                }
                transactions={income?.length || 0}
              />
              <Card
                accountDetails={accountDetails}
                income={income}
                expense={expense}
                setAccountDetails={setAccountDetails}
                userId={userId}
                accountId={accountId}
                account={accountDataHandler()}
                label="expense"
                amount={
                  (!expenseLoading &&
                    expense &&
                    ammountCalcHandler(
                      expense.length !== 0 && JSON.parse(expense[0].data)
                    )) ||
                  0
                }
                transactions={expense?.length || 0}
              />
            </div>
          )}
        </div>
        <div className="flex min-h-[40rem] w-full flex-col gap-4 rounded-t-3xl bg-white px-4 pb-28 pt-10">
          {!incomeLoading && income && !expenseLoading && expense && (
            <LogCard
              income={
                income && income.length !== 0 && JSON.parse(income[0].data)
              }
              expense={
                expense && expense.length !== 0 && JSON.parse(expense[0].data)
              }
            />
          )}
        </div>
      </div>
    );
  }
};

export default Account;
