import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-graphite text-pure-white hover:bg-carbon dark:bg-pure-white dark:text-graphite dark:hover:bg-soft-white",
        primary:
          "border-transparent bg-primary-blue text-pure-white hover:bg-blue-700",
        secondary:
          "border-transparent bg-light-gray text-graphite hover:bg-gray-200 dark:bg-carbon dark:text-pure-white",
        destructive:
          "border-transparent bg-red-500 text-pure-white hover:bg-red-600",
        outline: "text-graphite dark:text-pure-white border-industrial-gray",
        success: "border-transparent bg-success-green text-pure-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
