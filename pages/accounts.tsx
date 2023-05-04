import AccountCard from "@/components/account/AccountCard";
import NewAccount from "@/components/account/NewAccount";
import Button from "@/components/ui/Button";
import MyModal from "@/components/ui/Modal";
import React, { useState } from "react";
const Accounts = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="px-4 pt-4">
      <section className="pt-4">
        <AccountCard />
      </section>
      <div className="pt-6"></div>
      <Button className="text-white" onClick={() => setIsOpen(true)}>
        Open modal
      </Button>
      <MyModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="New Account"
        buttonTxt="Delete"
        buttonVariant="delete"
        buttonFunction={() => setIsOpen(false)}
      >
        <NewAccount />
      </MyModal>
    </div>
  );
};

export default Accounts;
