import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse, type NextRequest } from "next/server";
import { Database } from "./lib/api/databaseTypes";

export const middleware = async (req: NextRequest) => {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient<Database>({ req, res });

  await supabase.auth.getSession(); // create session for user and refresh it if neccessary

  return res;
};
