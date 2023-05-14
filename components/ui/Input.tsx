import React, { InputHTMLAttributes } from "react";
const Input = ({
  id,
  label,
  textSize,
  ...rest
}: InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label?: string;
  textSize?: string;
}) => {
  return (
    <label htmlFor={id}>
      <div className="mb-2 pl-2 capitalize">{label}</div>
      <input
        id={id}
        className={
          `border-b border-gray-300 border-x-transparent border-t-transparent py-2 focus:border-gray-300 focus:border-x-transparent focus:border-t-transparent focus:outline-none focus:ring-0` +
          " " +
          textSize
        }
        {...rest}
      />
    </label>
  );
};

export default Input;
