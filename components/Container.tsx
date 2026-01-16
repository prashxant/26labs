import { cn } from "@/lib/utils"

type ContainerProps = {
  className?: string
  children: React.ReactNode
}


export const Container = ({className,children}: ContainerProps) => {
  return (
    <div className={cn("max-w-5xl  mx-auto overflow-hidden", className)}>
      {children}
    </div>
  );
}

