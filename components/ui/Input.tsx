import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const InputVariants = cva("px-4 py-3 block w-full", {
  variants: {
    variant: {
      default:
        "border-gray-200 text-sm focus:border-blue-500 focus:ring-blue-500",
      underline:
        "focus:border-gray-300 focus:border-x-transparent focus:border-t-transparent focus:outline-none focus:ring-0 border-b border-gray-300 border-x-transparent border-t-transparent",
      ghost:
        "focus:border-transparent focus:outline-none focus:ring-0  border-transparent",
    },
    rounded: {
      default: "rounded-lg",
      none: "rounded-0",
      full: "rounded-full",
    },
  },

  defaultVariants: {
    variant: "default",
    rounded: "default",
  },
});

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof InputVariants> {}

const Input = ({
  label,
  variant,
  rounded,
  className,
  ...rest
}: InputProps & {
  id: string;
  label?: string;
}) => {
  return (
    <div>
      {label !== undefined && (
        <div className="mb-2 pl-2 capitalize">{label}</div>
      )}
      <input
        className={InputVariants({ variant, rounded, className })}
        {...rest}
      />
    </div>
  );
};

export default Input;
