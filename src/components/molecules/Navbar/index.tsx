"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import Cookies from "js-cookie";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { handleLogout } from "@/auth/logout";
import Link from "next/link";
import { SubHeading } from "@/components/atoms/Typography";
import { usePathname } from "next/navigation";

interface AuthenticatedDataProps {
  username: string;
  email: string;
  role: string;
}

export default function Navbar() {
  const [authenticatedData, setAuthenticatedData] =
    useState<AuthenticatedDataProps | null>(null);

  useEffect(() => {
    const cookie = Cookies.get("user");
    if (cookie) {
      setAuthenticatedData(JSON.parse(cookie));
    }
  }, []);

  const pathname = usePathname();
  console.log(pathname);

  const navLink = [
    {
      id: 1,
      name: "Dashboard",
      link: "/dashboard",
      isActive: pathname === "/dashboard",
    },
    {
      id: 2,
      name: "Management",
      link: "/dashboard/management",
      isActive: pathname === "/dashboard/management",
    },
  ];

  const { username } = authenticatedData || {};

  return (
    <>
      <nav className={`flex items-center justify-between`}>
        <div className="flex items-center gap-8">
          <Link href={`/`} className={`cursor-pointer`}>
            <SubHeading>Workpace</SubHeading>
          </Link>

          {pathname.startsWith("/dashboard") ? (
            <ul className={`hidden items-center gap-2 lg:flex`}>
              {navLink.map((item) => (
                <li key={item.id} className={``}>
                  <Link
                    href={item.link}
                    className={`${item.isActive ? "underline underline-offset-8" : ""}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        {authenticatedData ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant={`ghost`}>
                Hi, {username}!
                <ChevronDown size={12} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={handleLogout}
                className={`cursor-pointer`}
              >
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button asChild>
            <Link href={`/login`} className={`cursor-pointer`}>
              Login
            </Link>
          </Button>
        )}
      </nav>
    </>
  );
}
