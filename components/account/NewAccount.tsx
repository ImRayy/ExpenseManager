import React, { SetStateAction, useState } from "react";
import { accountTypes } from "@/types/interface";
import ColorPicker from "../ui/ColorPicker";
import { Wallet } from "lucide-react";
import Input from "../ui/Input";

interface NewAccountProps {
  account: accountTypes;
  setAccount: React.Dispatch<SetStateAction<accountTypes>>;
}
const NewAccount = ({ account, setAccount }: NewAccountProps) => {
  const id = crypto.randomUUID();

  const [color, setColor] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAccount({
      ...account,
      [name]: value,
      ["income"]: 0.0,
      ["expense"]: 0.0,
      ["color"]: `${color !== "" ? color : "bg-blue-500"}`,
      ["id"]: `${id}`,
    });
  };
  return (
    <div className="flex flex-col items-center gap-6">
      {/* Account Name */}
      <section className="flex w-full items-center gap-4">
        <span
          className={`rounded-full p-4 text-white ${color || "bg-blue-500"}`}
        >
          <Wallet />
        </span>
        <span className="mb-auto mr-4 w-full">
          <Input
            id="account"
            type="text"
            name="accountName"
            onChange={(e) => handleChange(e)}
          />
        </span>
      </section>

      {/* Color Picker */}

      <section className="w-full space-y-4 font-bold">
        <span>Choose Color</span>
        <ColorPicker setColor={setColor} />
      </section>
      <Input
        id="totalBalance"
        type="number"
        name="totalBalance"
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default NewAccount;
