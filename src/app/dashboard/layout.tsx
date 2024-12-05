import type { Metadata } from "next";
import ContainerLayout from "@/components/templates/ContainerLayout";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ContainerLayout>{children}</ContainerLayout>;
}
