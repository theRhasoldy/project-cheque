import { Database } from "@/lib/api/databaseTypes";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const requestUrl = new URL(request.url);

  // setup route handler
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient<Database>({
    cookies: () => cookieStore,
  });

  await supabase.auth.signOut();

  return NextResponse.redirect(requestUrl.origin, { status: 301 });
};
