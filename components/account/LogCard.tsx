import { useCollectionData } from "react-firebase-hooks/firestore";
import React, { useEffect, useState, SetStateAction } from "react";
import { Download, ShoppingBag, DollarSign } from "lucide-react";
import { collection, DocumentData } from "firebase/firestore";
import { useRouter } from "next/router";
import { db } from "@/lib/clientApp";
import Button from "../ui/Button";
import { memo } from "react";

interface LogCardPros {
  setTotalIncome: React.Dispatch<SetStateAction<string>>;
  setTotalExpense: React.Dispatch<SetStateAction<string>>;
}
const LogCard = ({ setTotalIncome, setTotalExpense }: LogCardPros) => {
  const router = useRouter();
  const [data, setData] = useState<DocumentData[]>([]);

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
  const [income, incomeLoading] = useCollectionData(dataRef("income"));
  const [expense, expenseLoading] = useCollectionData(dataRef("expense"));
  useEffect(() => {
    if (!incomeLoading && income && !expenseLoading && expense) {
      const combinedData = [...income, ...expense];
      setData(combinedData);
    }
    let totalIncome = 0;
    let totalExpensed = 0;
    for (let i = 0; i < (income?.length ?? 0); i++) {
      if (!incomeLoading && income) {
        totalIncome += Number(income[i]?.amount);
      }
    }
    setTotalIncome(totalIncome.toString());
  }, [income, expense, incomeLoading, expenseLoading]);

  return (
    <>
      {data.map((i, index) => (
        <div
          className="w-full  space-y-4 rounded-xl bg-slate-100 p-4 text-black"
          key={index}
        >
          <section className="flex gap-3">
            <Button size="sm" variant="solid_violet">
              <ShoppingBag size={16} />
              Shopping
            </Button>
            <Button size="sm">
              <DollarSign size={16} />
              Cash
            </Button>
          </section>
          <section className="space-y-2">
            <span>{i.title}</span>
            <div className="flex items-center gap-4">
              <Button
                size="equal"
                className="bg-gradient-to-r from-green-500 to-lime-400"
              >
                <Download size={15} />
              </Button>
              <span className="text-lg font-bold">{i.amount} INR</span>
            </div>
          </section>
        </div>
      ))}
    </>
  );
};

export default memo(LogCard);
