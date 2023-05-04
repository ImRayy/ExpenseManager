import React, { InputHTMLAttributes } from "react";
const Input = ({
  id,
  ...rest
}: InputHTMLAttributes<HTMLInputElement> & {
  id: string;
}) => {
  return (
    <input
      id={id}
      type="text"
      className="w-full border-b-2 border-gray-300 border-x-transparent border-t-transparent py-2 focus:border-gray-300 focus:border-x-transparent focus:border-t-transparent focus:outline-none focus:ring-0"
      {...rest}
    />
  );
};

export default Input;
