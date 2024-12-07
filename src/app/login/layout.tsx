import type { Metadata } from "next";
import AuthLayout from "@/components/templates/AuthLayout";

export const metadata: Metadata = {
  title: "Login",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AuthLayout>{children}</AuthLayout>;
}
