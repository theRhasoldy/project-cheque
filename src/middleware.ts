import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse, type NextRequest } from "next/server";
import { Database } from "./lib/api/databaseTypes";

export const middleware = async (req: NextRequest) => {
  const requestUrl = new URL(req.url);
  const res = NextResponse.next();
  const supabase = createMiddlewareClient<Database>({ req, res });

  const session = await supabase.auth.getSession(); // create session for user and refresh it if neccessary

  // route to login if not logged
  if (
    !session.data.session &&
    !(requestUrl.pathname === "/login" || requestUrl.pathname === "/signup")
  ) {
    return NextResponse.redirect(new URL("/login", requestUrl));
  } else if (
    session.data.session &&
    (requestUrl.pathname === "/login" || requestUrl.pathname === "/signup")
  ) {
    return NextResponse.redirect(requestUrl.origin, { status: 301 });
  }
};

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|assets|public|favicon.ico|sw.js).*)",
  ],
};
