import { redirect } from "next/navigation";

export const handleLogout = () => {
  document.cookie = "user=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT";
  redirect("/login");
};
