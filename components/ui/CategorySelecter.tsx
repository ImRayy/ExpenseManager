import React, { SetStateAction, useEffect, useState } from "react";
import { Plus } from "lucide-react";
import Button from "../ui/Button";
import Modal from "../ui/Modal";

interface CategorySelectorProps {
  selectedValue: string;
  setSelectedValue: React.Dispatch<SetStateAction<string>>;
}

const CategorySelector = ({
  selectedValue,
  setSelectedValue,
}: CategorySelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  const options = [
    { value: "Food & Drink" },
    { value: "Electricity Bill" },
    { value: "Mobile Recharge" },
  ];

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>
        <Plus size={20} />
        Select Category
      </Button>

      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="New Account"
        buttonTxt="Save"
        buttonVariant="success"
        buttonFunction={() => setIsOpen(false)}
      >
        <div className="flex flex-wrap gap-2">
          {options.map((option) => (
            <label
              key={option.value}
              className={`rounded-full ${
                selectedValue === option.value ? "bg-gray-300" : "bg-gray-200"
              } px-4 py-2 font-medium`}
            >
              <input
                name="category"
                type="radio"
                value={option.value}
                checked={selectedValue === option.value}
                onChange={handleRadioChange}
                className="hidden"
              />
              {option.value}
            </label>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default CategorySelector;
