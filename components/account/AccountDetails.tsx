import React, { SetStateAction, useEffect, useState } from "react";
import { accountDetailTypes } from "@/types/interface";
import CategorySelector from "../ui/CategorySelecter";
import { Plus, Wallet } from "lucide-react";
import Button from "../ui/Button";
import Header from "../ui/Header";
import Input from "../ui/Input";
import { memo } from "react";
interface AccountDetailsProps {
  label: "income" | "expense";
  accountName: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  buttonFunc: () => void;
  accountDetails: accountDetailTypes;
  setAccountDetails: React.Dispatch<SetStateAction<accountDetailTypes>>;
}
const AccountDetails = ({
  label,
  accountName,
  isOpen,
  setIsOpen,
  buttonFunc,
  accountDetails,
  setAccountDetails,
}: AccountDetailsProps) => {
  const [category, setCategory] = useState("");
  const [variant, setVariant] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAccountDetails({
      ...accountDetails,
      [name]: value,
      ["type"]: `${label}`,
      ["accountName"]: `${accountName}`,
      ["category"]: `${category}`,
    });
  };

  useEffect(() => {
    setAccountDetails((prev) => ({
      ...prev,
      ["category"]: `${category}`,
    }));
  }, [category, setAccountDetails]);
  return (
    <div
      className={`${
        isOpen ? "fixed" : "hidden"
      } left-0 top-0 z-50 h-full w-full space-y-6 bg-white text-black`}
    >
      <Header isFixed={false} buttonFunc={() => setIsOpen(false)} />
      <div className="space-y-6 px-4">
        <Input
          id="title"
          type="text"
          name="title"
          placeholder={`${
            label.charAt(0).toUpperCase() + label.slice(1)
          } Title`}
          textSize="text-3xl font-extrabold"
          onChange={(e) => handleChange(e)}
        />
        {/* <Button className="w-auto"> */}
        {/*   <Plus /> */}
        {/*   Add Category */}
        {/* </Button> */}
        <CategorySelector
          selectedValue={category}
          variant={variant}
          setSelectedValue={setCategory}
          setVarient={setVariant}
        />
        <div className="space-y-2">
          <Input
            id="description"
            placeholder="Description"
            name="description"
            className="w-full rounded-lg"
            onChange={(e) => handleChange(e)}
          />
          <input
            id="dateTime"
            type="datetime-local"
            className="w-full rounded-lg  py-2 text-black"
            placeholder="Created On"
            name="dateTime"
            onChange={(e) => handleChange(e)}
          />
        </div>
        {/* <div className="space-y-4 pt-4"> */}
        {/*   <span className="text-xl font-bold">Add money to</span> */}
        {/*   <span className="flex flex-wrap gap-3"> */}
        {/*     <Button className="font-medium"> */}
        {/*       <Wallet size={16} /> */}
        {/*       RAY */}
        {/*     </Button> */}
        {/*     <Button variant="relaxed_rose" className="font-medium"> */}
        {/*       <Wallet size={16} /> */}
        {/*       Author */}
        {/*     </Button> */}
        {/*     <Button */}
        {/*       variant="secondary" */}
        {/*       className=" whitespace-nowrap  font-medium" */}
        {/*     > */}
        {/*       <Plus size={16} /> */}
        {/*       Add Account */}
        {/*     </Button> */}
        {/*   </span> */}
        {/* </div> */}
        <div>
          <Input
            id="amount"
            name="amount"
            type="number"
            placeholder="0.00"
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <div className="fixed bottom-0 w-full p-2">
        <Button rounded="lg" className="w-full" onClick={buttonFunc}>
          Add
        </Button>
      </div>
    </div>
  );
};

export default memo(AccountDetails);
