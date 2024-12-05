import { cn } from "@/lib/utils";

interface ContainerLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function ContainerLayout({
  children,
  className,
  ...props
}: ContainerLayoutProps) {
  return (
    <div className={cn(`container ${className}`)} {...props}>
      {children}
    </div>
  );
}
