import Navbar from "@/components/molecules/Navbar";
import ContainerLayout from "@/components/templates/ContainerLayout";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <ContainerLayout>
        <Navbar />
        {children}
      </ContainerLayout>
    </>
  );
}
