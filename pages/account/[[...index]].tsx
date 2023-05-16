import { DocumentData, collection, query } from "firebase/firestore";
import { accountDetailTypes, accountTypes } from "@/types/interface";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { amountCalcHandler, dateTime } from "@/lib/helpers";
import { useAuthState } from "react-firebase-hooks/auth";
import LogCard from "@/components/account/LogCard";
import React, { useEffect, useState } from "react";
import useUser from "@/components/hooks/useUser";
import Card from "@/components/account/Card";
import Header from "@/components/ui/Header";
import Title from "@/components/ui/Title";
import { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import { db } from "@/lib/clientApp";
import { auth } from "../_app";

const Account = () => {
  const { createUser } = useUser();
  const router = useRouter();
  const [user] = useAuthState(auth, {
    onUserChanged: async (user) => {
      if (!user) {
        router.push("/signin");
        return;
      }
      createUser(user);
    },
  });

  const dataRef = (
    uid: string,
    type: string
  ): ReturnType<typeof collection> => {
    return collection(
      db,
      "users",
      uid,
      "accounts",
      router.asPath.split("/")[2],
      type
    );
  };

  const accountId = router.asPath.split("/")[2];
  const [account, setAccount] = useState<accountTypes>(Object);
  const [accountDetails, setAccountDetails] =
    useState<accountDetailTypes>(Object);

  const [income, incomeLoading] = useCollectionData(
    user && query(dataRef(user.uid, "income"))
  );
  const [expense, expenseLoading] = useCollectionData(
    user && query(dataRef(user.uid, "expense"))
  );

  const [data, loading] = useCollectionData(
    user && query(collection(db, "users", user.uid, "accounts"))
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

  if (user && !loading && data) {
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
                userId={user.uid}
                accountId={accountId}
                account={account}
                label="income"
                amount={
                  (!incomeLoading &&
                    income.length !== 0 &&
                    amountCalcHandler(JSON.parse(income[0].data))) ||
                  0
                }
                transactions={income?.length || 0}
              />
              <Card
                accountDetails={accountDetails}
                income={income}
                expense={expense}
                setAccountDetails={setAccountDetails}
                userId={user.uid}
                accountId={accountId}
                account={account}
                label="expense"
                amount={
                  (!expenseLoading &&
                    expense &&
                    amountCalcHandler(
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
