import React, { InputHTMLAttributes } from "react";
const Input = ({
  id,
  textSize,
  ...rest
}: InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  textSize?: string;
}) => {
  return (
    <input
      id={id}
      type="text"
      className={
        `w-full border-b border-gray-300 border-x-transparent border-t-transparent py-2 focus:border-gray-300 focus:border-x-transparent focus:border-t-transparent focus:outline-none focus:ring-0` +
        " " +
        textSize
      }
      {...rest}
    />
  );
};

export default Input;
