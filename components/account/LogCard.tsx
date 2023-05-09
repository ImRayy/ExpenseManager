import React, { useEffect, useState, SetStateAction } from "react";
import { Download, ShoppingBag, DollarSign } from "lucide-react";
import { collection, DocumentData } from "firebase/firestore";
import { useRouter } from "next/router";
import { db } from "@/lib/clientApp";
import Button from "../ui/Button";
import { memo } from "react";

interface LogCardPros {
  income: DocumentData[];
  expense: DocumentData[];
}
const LogCard = ({ income, expense }: LogCardPros) => {
  const [data, setData] = useState<DocumentData[]>([]);

  useEffect(() => {
    if (income && expense) {
      const combinedData = [...income, ...expense];
      setData(combinedData);
    }
    let totalIncome = 0;
    let totalExpense = 0;
    for (let i = 0; i < (income?.length ?? 0); i++) {
      if (income) {
        totalIncome += Number(income[i]?.amount);
      }
    }
    for (let i = 0; i < (expense?.length ?? 0); i++) {
      if (expense) {
        totalExpense += Number(expense[i]?.amount);
      }
    }
  }, [income, expense]);

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
