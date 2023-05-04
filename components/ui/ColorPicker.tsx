import React, { SetStateAction } from "react";
interface ColorPickerProps {
  setColor: React.Dispatch<SetStateAction<string>>;
}
const ColorPicker = ({ setColor }: ColorPickerProps) => {
  const colors = [
    "bg-blue-500",
    "bg-rose-500",
    "bg-pink-500",
    "bg-orange-500",
    "bg-yellow-500",
    "bg-green-500",
    "bg-cyan-500",
    "bg-violet-500",
    "bg-fuchsia-500",
  ];
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex-shrink-0">
        <div
          className="flex items-center justify-start gap-4 overflow-x-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {colors.map((color, index) => (
            <div
              key={index}
              className={`h-12 w-12 flex-shrink-0 rounded-full ${color}`}
              onClick={() => setColor(color)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
