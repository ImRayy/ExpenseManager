import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const BadgeVariants = cva(
  "flex items-center font-semibold px-4 py-1.5 text-sm h-6 px-4",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-cyan-500 to-blue-500 shadow-md shadow-blue-600 text-white",
      },
      rounded: {
        default: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      rounded: "default",
    },
  }
);

export interface BadgeProps
  extends React.AllHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof BadgeVariants> {
  label: string;
}

const Badge = ({ label, variant, rounded, className, ...rest }: BadgeProps) => {
  return (
    <div className={BadgeVariants({ variant, rounded, className })} {...rest}>
      {label}
    </div>
  );
};

export default Badge;
