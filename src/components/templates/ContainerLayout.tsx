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
    <div className={cn(`max-w-8xl container my-5 ${className}`)} {...props}>
      {children}
    </div>
  );
}
