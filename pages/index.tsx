import InfoCards from "@/components/home/InfoCards";
// import Header from "@/components/ui/Header";
import Header from "@/components/ui/Header";
import Title from "@/components/ui/Title";
import React from "react";
const Home = () => {
  return (
    <div className="flex w-full flex-col gap-2 px-4 pt-20">
      {/* Header */}
      <Header isFixed={true} />
      {/* Info */}
      <section className="mb-3">
        <Title amount="19,932.00" currency="inr" />
      </section>
      <InfoCards income="28,708.00" expenses="8,776.00" />
    </div>
  );
};

export default Home;
