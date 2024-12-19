import Navbar from "@/components/molecules/Navbar";
import ContainerLayout from "@/components/templates/ContainerLayout";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import FAQ from "@/components/molecules/FAQ";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <ContainerLayout>
        <main className={`mx-5`}>
          <Navbar />
          {children}
          <Dialog>
            <DialogTrigger>Open</DialogTrigger>
            <DialogContent className={`max-w-4xl`}>
              <DialogHeader>
                <DialogTitle>FAQ</DialogTitle>
                <FAQ />
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </main>
      </ContainerLayout>
    </>
  );
}
