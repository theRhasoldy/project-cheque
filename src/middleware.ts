import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse, type NextRequest } from "next/server";
import { Database } from "./lib/api/databaseTypes";

export const middleware = async (req: NextRequest) => {
  const requestUrl = new URL(req.url);
  const res = NextResponse.next();
  const supabase = createMiddlewareClient<Database>({ req, res });

  const session = await supabase.auth.getSession(); // create session for user and refresh it if neccessary

  if (!session.data.session && requestUrl.pathname !== "/register") {
    console.log("No User");
    console.log("hello", requestUrl);
    return NextResponse.redirect(new URL("/register/login", requestUrl));
  }
};

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|register|auth).*)",
  ],
};
