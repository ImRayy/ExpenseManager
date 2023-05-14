import Button from "./Button";
import React from "react";

interface StickyButtonProps {
  label: string;
  onClick: () => void;
  bottomContent?: React.ReactNode;
}

const StickyButton = ({ label, onClick, bottomContent }: StickyButtonProps) => {
  return (
    <div className="fixed bottom-0 left-0 w-full p-4">
      <Button
        className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 px-6 shadow-md shadow-blue-800"
        onClick={onClick}
      >
        {label}
      </Button>
      {bottomContent}
    </div>
  );
};

export default StickyButton;
