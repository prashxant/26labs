import { cn } from "@/lib/utils"
import { Navbar } from "./Navbar/Navbar"

type ContainerProps = {
  className?: string
  children: React.ReactNode
}

export const Container = ({className,children}: ContainerProps) => {
  return (
    <div className={cn("max-w-270 mx-auto overflow-hidden", className)}>
      {children}
    </div>
  );
}

