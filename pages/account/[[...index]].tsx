import AddAmount from "@/components/account/AddAmount";
import LogCard from "@/components/account/LogCard";
import Card from "@/components/account/Card";
import Header from "@/components/ui/Header";
import Title from "@/components/ui/Title";
import React, { useState } from "react";
const Account = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ModalHandler = () => {
    setIsOpen(isOpen ? false : true);
  };
  return (
    <div className="flex min-h-screen flex-col items-center  gap-4 bg-blue-500 pt-20 text-white">
      <Header isFixed={true} />
      <div className="flex w-full flex-col gap-4 px-4">
        <Title title="Cash" amount="12,262.00" currency="inr" />
        <div className="flex h-full w-full justify-between gap-4">
          <Card buttonFunc={ModalHandler} />
          <Card buttonFunc={ModalHandler} />
        </div>
      </div>
      <div className="flex min-h-[40rem] w-full flex-col gap-4 rounded-t-3xl bg-white px-4 pt-10">
        <LogCard />
      </div>
      <AddAmount isOpen={isOpen} buttonFunc={ModalHandler} />
    </div>
  );
};

export default Account;
