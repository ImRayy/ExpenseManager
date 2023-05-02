import { cva, VariantProps } from 'class-variance-authority'
import React from 'react'

const cardVariants = cva('p-3 rounded-lg', {
  variants: {
    variant: {
      default: 'bg-gray-100 border',
      green:
        'bg-gradient-to-r from-emerald-400 to-green-300 shadow-lg shadow-emerald-200',
      black:
        'bg-gradient-to-r from-gray-900 to-gray-500 shadow-lg shadow-gray-400',
    },
    size: {
      default: 'w-full h-20',
    },

    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
})

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  children: React.ReactNode
}

const Card = ({ variant, size, className, children }: CardProps) => {
  return (
    <div className={cardVariants({ variant, size, className })}>{children}</div>
  )
}

export default Card
