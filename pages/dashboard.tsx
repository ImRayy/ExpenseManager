import { collection, getDocs, query, DocumentData } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import InfoCards from "@/components/home/InfoCards";
import LogCard from "@/components/account/LogCard";
import React, { useEffect, useState } from "react";
import { amountCalcHandler } from "@/lib/helpers";
import useUser from "@/components/hooks/useUser";
import Header from "@/components/ui/Header";
import Title from "@/components/ui/Title";
import { useRouter } from "next/router";
import { db } from "@/lib/clientApp";
import { auth } from "./_app";

const Dashboard = () => {
  const router = useRouter();

  // Check if user logged in or not
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

  const [data, loading] = useCollectionData(
    user && query(collection(db, "users", user?.uid, "accounts"))
  );

  const [income, setIncome] = useState<DocumentData[]>([]);
  const [expense, setExpense] = useState<DocumentData[]>([]);

  useEffect(() => {
    if (user && !loading && data) {
      const types = ["income", "expense"];
      const ids = data.map((i) => i.id);

      const fetchAccounts = async (type: string) => {
        const allCollections: DocumentData[] = [];
        const income: DocumentData[] = [];
        const expense: DocumentData[] = [];

        const promises = ids.map(async (id) => {
          const querySnapshot = await getDocs(
            collection(db, "users", user.uid || "", "accounts", id, type)
          );
          const accountData = querySnapshot.docs.map((doc) => doc.data());
          allCollections.push(...accountData);
        });

        await Promise.all(promises);
        for (const i of allCollections) {
          for (const data of JSON.parse(i.data)) {
            if (type === "income") {
              income.push(data);
            } else if (type === "expense") {
              expense.push(data);
            } else {
              throw new Error("Wrong type, either use 'income' or 'expense'");
            }
          }
        }
        if (type === "income") {
          setIncome(income);
        } else {
          setExpense(expense);
        }
      };
      for (const type of types) {
        fetchAccounts(type);
      }
    }
  }, [user, data, loading]);

  if (user && !loading && data) {
    return (
      <div className="flex w-full flex-col gap-2 bg-white px-4 pt-20">
        {/* Header */}
        <Header
          isFixed={true}
          customTxt={user.displayName?.toString()}
          userPhotoURL={user.photoURL?.toString()}
        />
        {/* Info */}
        <section className="mb-3">
          <Title amount={amountCalcHandler(data).toString()} currency="inr" />
        </section>
        <InfoCards
          income={amountCalcHandler(income).toString()}
          expense={amountCalcHandler(expense).toString()}
        />
        <div className="mt-10 flex min-h-screen w-full flex-col gap-4  pb-20">
          <LogCard income={income} expense={expense} />
        </div>
      </div>
    );
  }
};

export default Dashboard;
