import { useCollectionData } from "react-firebase-hooks/firestore";
import AddAmount from "@/components/account/AddAmount";
import LogCard from "@/components/account/LogCard";
import { accountTypes } from "@/types/interface";
import { collection } from "firebase/firestore";
import Card from "@/components/account/Card";
import Header from "@/components/ui/Header";
import Title from "@/components/ui/Title";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { db } from "@/lib/clientApp";
const Account = () => {
  const router = useRouter();
  const accountId = router.asPath.split("/")[2];
  const [isOpen, setIsOpen] = useState(false);
  const [data, loading] = useCollectionData(
    collection(db, "users", "0.653159755779475", "accounts")
  );

  const ModalHandler = () => {
    setIsOpen(isOpen ? false : true);
  };

  const accountDataHandler = () => {
    return data?.find((i) => i.id === accountId) as accountTypes;
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
              amount={accountDataHandler().income.toString()}
            />
            <Card
              buttonFunc={ModalHandler}
              label="expense"
              amount={accountDataHandler().expense.toString()}
            />
          </div>
        </div>
        <div className="flex min-h-[40rem] w-full flex-col gap-4 rounded-t-3xl bg-white px-4 pt-10">
          <LogCard />
        </div>
        <AddAmount isOpen={isOpen} buttonFunc={ModalHandler} />
      </div>
    );
  }
};

export default Account;
