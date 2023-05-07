import { updateAccount, updateAccountDetails } from "@/lib/firestore";
import { accountDetailTypes, accountTypes } from "@/types/interface";
import React, { useCallback, useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import AccountCard from "@/components/account/AccountCard";
import NewAccount from "@/components/account/NewAccount";
import { collection } from "firebase/firestore";
import Skeleton from "react-loading-skeleton";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import { db } from "@/lib/clientApp";
import Link from "next/link";

const Accounts = () => {
  const userId = "0.653159755779475";
  const [data, loading] = useCollection(
    collection(db, "users", "0.653159755779475", "accounts")
  );
  const [isOpen, setIsOpen] = useState(false);
  const [account, setAccount] = useState<accountTypes>(Object);
  const [accDetails, setAccDetails] = useState<accountDetailTypes>(Object);

  useEffect(() => {
    const date = new Date();
    // To update income data on first account creation
    setAccDetails({
      ["title"]: "Account Balance",
      ["category"]: " ",
      ["description"]: "Initial account balance",
      ["dateTime"]: `${date.toISOString().split(":").splice(0, 2).join(":")}`,
      ["accountName"]: `${account.accountName}`,
      ["amount"]: account.totalBalance,
    });
    // setAccount({ ["income"]: account.totalBalance ;
  }, [account.accountName, account.totalBalance]);

  // Object to update/add data to firestorf
  const accountHandler = () => {
    if (account.id && accDetails.amount) {
      updateAccount(userId, account.id, account);
      updateAccountDetails("income", account.id, userId, accDetails);
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
                totalBalance={doc.data().totalBalance}
                income={doc.data().income}
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
