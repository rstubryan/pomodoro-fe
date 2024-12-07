import ContainerLayout from "@/components/templates/ContainerLayout";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <ContainerLayout
      className={`grid min-h-screen max-w-2xl grid-cols-1 items-center justify-center`}
    >
      {children}
    </ContainerLayout>
  );
}
