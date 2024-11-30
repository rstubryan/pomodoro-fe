"use client";

import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export default function Logout() {
  const handleLogout = () => {
    document.cookie = "user=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT";
    redirect("/login");
  };

  return <Button onClick={handleLogout}>Logout</Button>;
}
