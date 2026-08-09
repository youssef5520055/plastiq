import * as React from "react"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface DrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode
  side?: "left" | "right"
}

const Drawer = ({ open, onOpenChange, children, side = "right" }: DrawerProps) => {
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [open])

  const isRtl = side === "left"

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => onOpenChange(false)}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: isRtl ? "-100%" : "100%" }}
            animate={{ x: 0 }}
            exit={{ x: isRtl ? "-100%" : "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={cn(
              "fixed top-0 h-screen w-80 max-w-[90vw] bg-pure-white dark:bg-graphite shadow-lg z-50 flex flex-col",
              isRtl ? "left-0" : "right-0"
            )}
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

interface DrawerContentProps {
  children: React.ReactNode
  className?: string
}

const DrawerContent = React.forwardRef<HTMLDivElement, DrawerContentProps>(
  ({ children, className }, ref) => (
    <div ref={ref} className={cn("flex-1 overflow-y-auto p-6", className)}>
      {children}
    </div>
  )
)
DrawerContent.displayName = "DrawerContent"

interface DrawerHeaderProps {
  children: React.ReactNode
  onClose: () => void
  className?: string
}

const DrawerHeader = React.forwardRef<HTMLDivElement, DrawerHeaderProps>(
  ({ children, onClose, className }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex items-center justify-between p-6 border-b border-industrial-gray",
        className
      )}
    >
      <div>{children}</div>
      <button
        onClick={onClose}
        className="ml-auto inline-flex items-center justify-center rounded-md text-industrial-gray hover:text-graphite transition-colors"
      >
        <X className="h-6 w-6" />
      </button>
    </div>
  )
)
DrawerHeader.displayName = "DrawerHeader"

export { Drawer, DrawerContent, DrawerHeader }
