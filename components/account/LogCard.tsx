import { Download, Upload, ShoppingBag, DollarSign } from "lucide-react";
import React, { useEffect, useState, SetStateAction } from "react";
import { DocumentData } from "firebase/firestore";
import Button from "../ui/Button";
import { memo } from "react";

interface LogCardPros {
  income: DocumentData[];
  expense: DocumentData[];
}
const LogCard = ({ income, expense }: LogCardPros) => {
  const [data, setData] = useState<DocumentData[]>([]);

  useEffect(() => {
    let combinedData: DocumentData[] = [];

    if (income) {
      combinedData = [...income];
    }
    if (expense) {
      combinedData = [...expense];
    }
    if (income && expense) {
      combinedData = [...income, ...expense];
    }
    setData(combinedData);
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
                className={`bg-gradient-to-r ${
                  i.type === "income"
                    ? "from-green-500 to-lime-400"
                    : "from-black to-gray-500"
                }`}
              >
                {i.type === "income" ? (
                  <Download size={15} />
                ) : (
                  <Upload size={15} />
                )}
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
