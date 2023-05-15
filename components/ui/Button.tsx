import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const ButtonVariants = cva(
  "text-sm flex justify-center items-center gap-2 font-bold select-none cursor-pointer active:scale-95 transition-transform duration-150",
  {
    variants: {
      variant: {
        default: "text-white bg-gray-900 hover:bg-gray-800",
        secondary:
          "text-black bg-gray-200 hover:bg-gray-300 border border-gray-200",
        relaxed_rose:
          "bg-gradient-to-r text-white from-rose-500 to-rose-400 hover:bg-red-400 shadow-md shadow-red-200",
        solid_violet: "bg-violet-500 hover:bg-violet-600 text-white",
        gradient_blue: "bg-gradient-to-r from-indigo-600 to-sky-600 text-white",
      },
      size: {
        default: "h-10 px-4 py-1",
        lg: "h-12 px-6 py-1",
        sm: "h-8 px-4 py-1",
        equal: "p-2",
      },
      rounded: {
        default: "rounded-full",
        lg: "rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {}

const Button = ({
  variant,
  size,
  rounded,
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={ButtonVariants({ variant, size, rounded, className })}
      {...rest}
    />
  );
};
export default Button;
