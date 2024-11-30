import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { isAuth } from "@/hook/useAuth";

const protectedRoutes = ["/dashboard"];
const publicRoutes = ["/login", "/register", "/"];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  const cookie = (await cookies()).get("user")?.value;
  const authenticated = isAuth(cookie);

  const response = NextResponse.next();

  if (isProtectedRoute && !authenticated) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  if (
    isPublicRoute &&
    authenticated &&
    !req.nextUrl.pathname.startsWith("/dashboard")
  ) {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
