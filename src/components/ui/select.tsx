import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, ...props }, ref) => (
    <div className="relative w-full">
      <select
        className={cn(
          "flex h-10 w-full rounded-md border border-industrial-gray bg-transparent px-3 py-2 text-sm appearance-none ring-offset-background placeholder:text-industrial-gray focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-blue focus-visible:border-primary-blue disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
          className
        )}
        ref={ref}
        {...props}
      />
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-industrial-gray pointer-events-none" />
    </div>
  )
)
Select.displayName = "Select"

export { Select }
