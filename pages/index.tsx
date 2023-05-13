import { collection, getDocs, query, DocumentData } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import InfoCards from "@/components/home/InfoCards";
import LogCard from "@/components/account/LogCard";
import { ammountCalcHandler } from "@/lib/helpers";
import React, { useEffect, useState } from "react";
import Header from "@/components/ui/Header";
import Title from "@/components/ui/Title";
import { db } from "@/lib/clientApp";

const Home = () => {
  const userId = "6f664b96-b3b5-4410-9f19-2017c24fe234";
  const accRef = collection(db, "users", userId, "accounts");
  const [data, loading] = useCollectionData(
    query(accRef /* , where("id", "in", ids) */)
  );

  const [income, setIncome] = useState<DocumentData[]>([]);
  const [expense, setExpense] = useState<DocumentData[]>([]);

  useEffect(() => {
    if (!loading && data) {
      const types = ["income", "expense"];
      const ids = data.map((i) => i.id);

      const fetchAccounts = async (type: string) => {
        const allCollections: DocumentData[] = [];
        const income: DocumentData[] = [];
        const expense: DocumentData[] = [];

        const promises = ids.map(async (id) => {
          const querySnapshot = await getDocs(
            collection(db, "users", userId, "accounts", id, type)
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
  }, [userId, data, loading]);

  if (!loading && data) {
    return (
      <div className="flex w-full flex-col gap-2 bg-white px-4 pt-20">
        {/* Header */}
        <Header isFixed={true} />
        {/* Info */}
        <section className="mb-3">
          <Title amount={ammountCalcHandler(data).toString()} currency="inr" />
        </section>
        <InfoCards
          income={ammountCalcHandler(income).toString()}
          expense={ammountCalcHandler(expense).toString()}
        />
        <div className="mt-10 flex min-h-screen w-full flex-col gap-4  pb-20">
          <LogCard income={income} expense={expense} />
        </div>
      </div>
    );
  }
};

export default Home;
