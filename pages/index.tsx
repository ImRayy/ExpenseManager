import { useCollectionData } from "react-firebase-hooks/firestore";
import InfoCards from "@/components/home/InfoCards";
import { ammountCalcHandler } from "@/lib/helpers";
import { collection } from "firebase/firestore";
import Header from "@/components/ui/Header";
import Title from "@/components/ui/Title";
import { db } from "@/lib/clientApp";
import React from "react";

const Home = () => {
  const userId = "6f664b96-b3b5-4410-9f19-2017c24fe234";
  const accRef = collection(db, "users", userId, "accounts");
  const [data, loading] = useCollectionData(accRef);
  if (!loading && data) {
    return (
      <div className="flex w-full flex-col gap-2 px-4 pt-20">
        {/* Header */}
        <Header isFixed={true} />
        {/* Info */}
        <section className="mb-3">
          <Title amount={ammountCalcHandler(data).toString()} currency="inr" />
        </section>
        <InfoCards income="28,708.00" expenses="8,776.00" />
      </div>
    );
  }
};

export default Home;
