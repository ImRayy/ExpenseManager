import AccountCard from "@/components/account/AccountCard";
import Button from "@/components/ui/Button";
import MyModal from "@/components/ui/Modal";
import React, { useState } from "react";
const Accounts = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [account, setAccount] = useState({ holderName: "" });
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
        <div>
          <input
            type="text"
            className="w-full border-b px-4 py-2.5"
            placeholder="Account Name"
          />
        </div>
      </MyModal>
    </div>
  );
};

export default Accounts;
