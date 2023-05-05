import { Plus, Wallet } from "lucide-react";
import Button from "../ui/Button";
import Header from "../ui/Header";
import Input from "../ui/Input";
import React from "react";
interface AddAmountProps {
  isOpen: boolean;
  buttonFunc: () => void;
}
const AddAmount = ({ isOpen, buttonFunc }: AddAmountProps) => {
  return (
    <div
      className={`${
        isOpen ? "fixed" : "hidden"
      } top-0 z-[99] h-full w-full space-y-6 bg-white text-black`}
    >
      <Header isFixed={false} buttonFunc={buttonFunc} />
      <div className="space-y-6 px-4">
        <Input
          id="income"
          type="text"
          placeholder="Income Title"
          textSize="text-3xl font-extrabold"
        />
        <Button>
          <Plus />
          Add Category
        </Button>
        <div className="space-y-2">
          <textarea placeholder="Description" className="w-full rounded-lg" />
          <input
            type="datetime-local"
            className="w-full rounded-lg  py-2 text-black"
            placeholder="Created On"
          />
        </div>
        <div className="space-y-4 pt-4">
          <span className="text-xl font-bold">Add money to</span>
          <span className="flex flex-wrap gap-3">
            <Button className="font-medium">
              <Wallet size={16} />
              RAY
            </Button>
            <Button variant="relaxed_rose" className="font-medium">
              <Wallet size={16} />
              Author
            </Button>
            <Button
              variant="secondary"
              className="whitespace-nowrap font-medium"
            >
              <Plus size={16} />
              Add Account
            </Button>
          </span>
        </div>
        <div>
          <Input id="amount" name="amount" type="number" placeholder="0.00" />
        </div>
      </div>
    </div>
  );
};

export default AddAmount;
