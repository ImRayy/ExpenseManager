import { updateAccount, updateAccountDetails } from "@/lib/firestore";
import { DocumentData, collection, query } from "firebase/firestore";
import { accountDetailTypes, accountTypes } from "@/types/interface";
import { useCollection } from "react-firebase-hooks/firestore";
import AccountCard from "@/components/account/AccountCard";
import NewAccount from "@/components/account/NewAccount";
import { useAuthState } from "react-firebase-hooks/auth";
import React, { useEffect, useState } from "react";
import useUser from "@/components/hooks/useUser";
import Skeleton from "react-loading-skeleton";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import { dateTime } from "@/lib/helpers";
import { useRouter } from "next/router";
import { db } from "@/lib/clientApp";
import { auth } from "./_app";
import Link from "next/link";

const Accounts = () => {
  const router = useRouter();
  const { createUser } = useUser();
  const [user] = useAuthState(auth, {
    onUserChanged: async (user) => {
      if (!user) {
        router.push("/signin");
        return;
      }
      createUser(user);
    },
  });

  const [data, loading] = useCollection(
    user && query(collection(db, "users", user.uid, "accounts"))
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
    if (user && account.id && accDetails.amount) {
      const finalData = {
        data: JSON.stringify(accAppendData),
      };
      updateAccount(user.uid, account.id, account);
      updateAccountDetails(
        user.uid,
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
