import { accountDetailTypes, accountTypes } from "@/types/interface";
import { useCollectionData } from "react-firebase-hooks/firestore";
import AccountDetails from "@/components/account/AccountDetails";
import { collection, doc, setDoc } from "firebase/firestore";
import LogCard from "@/components/account/LogCard";
import Card from "@/components/account/Card";
import Header from "@/components/ui/Header";
import Title from "@/components/ui/Title";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { db } from "@/lib/clientApp";
const Account = () => {
  const router = useRouter();
  const accountId = router.asPath.split("/")[2];
  const [totalIncome, setTotalIncome] = useState("");
  const [totalExpense, setTotalExpense] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [accountDetails, setAccountDetails] =
    useState<accountDetailTypes>(Object);
  const [data, loading] = useCollectionData(
    collection(db, "users", "0.653159755779475", "accounts")
  );
  const accountRef = (type: "income" | "expense") => {
    return doc(
      db,
      "users",
      "0.653159755779475",
      "accounts",
      router.asPath.split("/")[2],
      type,
      accountDetails.dateTime
    );
  };
  const ModalHandler = () => {
    setIsOpen(isOpen ? false : true);
  };

  const accountDataHandler = () => {
    return data?.find((i) => i.id === accountId) as accountTypes;
  };

  const firestoreHandler = async () => {
    setDoc(accountRef("income"), accountDetails, { merge: true });
  };
  if (!loading && data) {
    return (
      <div className="flex min-h-screen flex-col items-center  gap-4 bg-blue-500 pt-20 text-white">
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
              amount={Number(totalIncome) || 0.0}
            />
            <Card buttonFunc={ModalHandler} label="expense" amount={0.0} />
          </div>
        </div>
        <div className="flex min-h-[40rem] w-full flex-col gap-4 rounded-t-3xl bg-white px-4 pt-10">
          <LogCard
            setTotalIncome={setTotalIncome}
            setTotalExpense={setTotalExpense}
          />
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
