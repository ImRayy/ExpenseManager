import { updateAccount, updateAccountDetails } from "@/lib/firestore";
import { accountDetailTypes, accountTypes } from "@/types/interface";
import { useCollection } from "react-firebase-hooks/firestore";
import { DocumentData, collection } from "firebase/firestore";
import AccountCard from "@/components/account/AccountCard";
import NewAccount from "@/components/account/NewAccount";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import { dateTime } from "@/lib/helpers";
import { db } from "@/lib/clientApp";
import Link from "next/link";

const Accounts = () => {
  const userId = "6f664b96-b3b5-4410-9f19-2017c24fe234";
  const [data, loading] = useCollection(
    collection(db, "users", userId, "accounts")
  );
  const [isOpen, setIsOpen] = useState(false);
  const [account, setAccount] = useState<accountTypes>(Object);
  const [accDetails, setAccDetails] = useState(Object);
  useEffect(() => {
    // To update income data on first account creation
    setAccDetails({
      ["type"]: "income",
      ["accountName"]: `${account.accountName}`,
      ["title"]: "Account Balance",
      ["dateTime"]: `${dateTime({ time: true })}`,
      ["amount"]: account.amount,
    });
    // setAccount({ ["income"]: account.totalBalance ;
  }, [account.accountName, account.amount]);

  // Object to update/add data to firestorf
  const accountHandler = () => {
    const accAppendData = [];
    accAppendData.push(accDetails);
    if (account.id && accDetails.amount) {
      const finalData = {
        data: JSON.stringify(accAppendData),
      };
      updateAccount(userId, account.id, account);
      updateAccountDetails(
        "income",
        account.id,
        dateTime({ time: false, hideDay: true }),
        finalData
      );
    }
    setIsOpen(false);
  };

  return (
    <div className="px-4 pt-4">
      <section className="flex flex-col gap-4">
        {!loading && data ? (
          data.docs.map((doc, index) => (
            <Link key={index} href={`account/${doc.id}`}>
              <AccountCard
                accountName={doc.data().accountName}
                totalBalance={doc.data().amount}
                income={0}
                expense={doc.data().expense}
                currency={doc.data().currency}
                color={doc.data().color}
              />
            </Link>
          ))
        ) : (
          <Skeleton className="mb-4 h-52" />
        )}
      </section>
      <div className="pt-6"></div>
      <Button className="text-white" onClick={() => setIsOpen(true)}>
        Open modal
      </Button>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="New Account"
        buttonTxt="Save"
        buttonVariant="success"
        buttonFunction={accountHandler}
      >
        <NewAccount account={account} setAccount={setAccount} />
      </Modal>
    </div>
  );
};
export default Accounts;
