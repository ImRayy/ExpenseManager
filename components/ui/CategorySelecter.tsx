import { Plus, CheckCircle2, Repeat } from "lucide-react";
import React, { SetStateAction, useState } from "react";
import Button from "../ui/Button";
import Modal from "../ui/Modal";

interface CategorySelectorProps {
  selectedValue: string;
  variant: string;
  setSelectedValue: React.Dispatch<SetStateAction<string>>;
  setVarient: React.Dispatch<SetStateAction<string>>;
}

const CategorySelector = ({
  selectedValue,
  variant,
  setSelectedValue,
  setVarient,
}: CategorySelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const options = [
    {
      value: "Food & Drink",
      color: "bg-blue-600 text-white",
    },
    { value: "Electricity Bill", color: "bg-violet-600 text-white" },
    { value: "Health", color: "bg-rose-600 text-white" },
    { value: "Dish TV", color: "bg-green-600 text-white" },
    { value: "Travel", color: "bg-orange-500 text-white" },
    { value: "Mobile-recharge", color: "bg-cyan-500 text-white" },
    { value: "Gifts", color: "bg-pink-500 text-white" },
    { value: "Groceries", color: "bg-yellow-500 text-white" },
  ];

  return (
    <div>
      <Button onClick={() => setIsOpen(true)} className={`${variant}`}>
        {selectedValue !== "" ? (
          <>
            <Repeat size={18} />
            <span>{selectedValue}</span>
          </>
        ) : (
          <>
            <Plus size={18} />
            Select Category
          </>
        )}
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
              className={`rounded-full ${option.color} flex items-center gap-2 px-4 py-2 text-sm font-bold`}
            >
              <input
                name="category"
                type="radio"
                value={option.value}
                checked={selectedValue === option.value}
                onChange={handleRadioChange}
                onClick={() => setVarient(option.color)}
                className="hidden"
              />
              {option.value}
              {selectedValue === option.value && <CheckCircle2 size={18} />}
            </label>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default CategorySelector;
