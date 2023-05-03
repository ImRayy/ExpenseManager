import Card from "@/components/account/Card";
import Button from "@/components/ui/Button";
import MyModal from "@/components/ui/Modal";
import Title from "@/components/ui/Title";
import React, { useState } from "react";
const Accounts = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="px-4 pt-4">
      <span className="text-lg font-bold">
        {/* <Title title="Accounts" label="Total: INR 16,000.00" /> */}
      </span>
      <section className="pt-4">
        <Card />
      </section>
      <div className="pt-6"></div>
      <Button className="text-white" onClick={() => setIsOpen(true)}>
        Open modal
      </Button>
      <MyModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="Payment Successful"
        description="Note: Deleting this account will remove it permanently and delete all associated transactions with it"
        buttonTxt="Delete"
        buttonVariant="delete"
        buttonFunction={() => setIsOpen(false)}
      />
    </div>
  );
};

export default Accounts;
