import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-blue disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "bg-graphite text-pure-white hover:bg-carbon shadow-sm dark:bg-pure-white dark:text-graphite dark:hover:bg-soft-white",
        primary:
          "bg-primary-blue text-pure-white hover:bg-blue-700 shadow-sm",
        electric:
          "bg-electric-blue text-graphite hover:bg-cyan shadow-sm",
        destructive:
          "bg-red-500 text-pure-white hover:bg-red-600 shadow-sm",
        outline:
          "border border-industrial-gray bg-transparent hover:bg-light-gray dark:hover:bg-carbon text-graphite dark:text-pure-white",
        secondary:
          "bg-light-gray text-graphite hover:bg-gray-200 dark:bg-carbon dark:text-pure-white dark:hover:bg-gray-800",
        ghost: "hover:bg-light-gray hover:text-graphite dark:hover:bg-carbon dark:hover:text-pure-white",
        link: "text-primary-blue underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-md px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
