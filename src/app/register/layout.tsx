import type { Metadata } from "next";
import ContainerLayout from "@/components/templates/ContainerLayout";

export const metadata: Metadata = {
  title: "Register",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ContainerLayout
      className={`grid min-h-screen max-w-2xl grid-cols-1 items-center justify-center`}
    >
      {children}
    </ContainerLayout>
  );
}
