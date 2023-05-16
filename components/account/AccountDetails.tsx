import React, { SetStateAction, useEffect, useState } from "react";
import { accountDetailTypes } from "@/types/interface";
import CategorySelector from "../ui/CategorySelecter";
import Button from "../ui/Button";
import { X } from "lucide-react";
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

  // HANDLER TO MONITOR INPUT CHANGES

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

  // HANDLER TO MONITOR TEXT AREA CHANGES

  const handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAccountDetails({
      ...accountDetails,
      [name]: value,
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
      {/* CLOSE WINDOW BUTTON */}

      <div className="w-full p-4">
        <Button
          variant="relaxed_rose"
          size="equal"
          className="ml-auto"
          onClick={() => setIsOpen(false)}
        >
          <X />
        </Button>
      </div>

      {/* TRANSACTION TITLE */}
      <div className="space-y-6 px-4">
        <Input
          id="title"
          type="text"
          name="title"
          placeholder={`${
            label.charAt(0).toUpperCase() + label.slice(1)
          } Title`}
          variant="underline"
          rounded="none"
          className="text-3xl font-bold"
          onChange={(e) => handleChange(e)}
        />

        {/* CATEGORY SELECTOR */}

        <CategorySelector
          selectedValue={category}
          variant={variant}
          setSelectedValue={setCategory}
          setVarient={setVariant}
        />
        <div className="space-y-2">
          {/* DESCRIPTION */}

          <textarea
            id="description"
            name="description"
            placeholder="Description"
            // onChange={(e) => handleChange(e)}
            className="w-full rounded-lg border-gray-200"
            onChange={(e) => handleChangeTextArea(e)}
          />

          {/* DATE TIME SELECTOR */}

          <Input
            id="dateTime"
            type="datetime-local"
            className="w-full rounded-lg  py-2 text-black"
            placeholder="Created On"
            name="dateTime"
            onChange={(e) => handleChange(e)}
          />
        </div>

        {/* AMOUNT */}

        <div>
          <Input
            id="amount"
            name="amount"
            type="number"
            variant="ghost"
            placeholder="0.00"
            className="text-center text-3xl font-bold"
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>

      {/* ADD BUTTON */}

      <div className="fixed bottom-0 w-full p-2">
        <Button rounded="lg" className="w-full" onClick={buttonFunc}>
          Add
        </Button>
      </div>
    </div>
  );
};

export default memo(AccountDetails);
