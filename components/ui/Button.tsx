import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const ButtonVariants = cva(
  "rounded-full text-sm flex text-white items-center gap-2 font-bold select-none cursor-pointer active:scale-95 transition-transform duration-150",
  {
    variants: {
      variant: {
        default: "bg-gray-900 hover:bg-gray-800",
        relaxed_rose:
          "bg-gradient-to-r from-rose-500 to-rose-400 hover:bg-red-400 shadow-md shadow-red-200",
      },
      size: {
        default: "h-8 px-4 py-1",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {}

const Button = ({ variant, size, className, ...rest }: ButtonProps) => {
  return (
    <button
      className={ButtonVariants({ variant, size, className })}
      {...rest}
    />
  );
};
export default Button;
