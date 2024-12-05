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

  const { username } = authenticatedData || {};

  return (
    <>
      <nav className={`flex items-center justify-between`}>
        <ul>
          <li className="">
            <Link href={`/`} className={`cursor-pointer`}>
              <SubHeading>Workpace</SubHeading>
            </Link>
          </li>
        </ul>

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
      </nav>
    </>
  );
}
