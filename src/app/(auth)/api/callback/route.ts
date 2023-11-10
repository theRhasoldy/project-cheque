import { Database } from "@/lib/api/databaseTypes";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");

  if (code) {
    // Create cookie store and route handler
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient<Database>({
      cookies: () => cookieStore,
    });

    await supabase.auth.exchangeCodeForSession(code);
  }

  // URL to redirect to after a successful login
  return NextResponse.redirect(requestUrl.origin);
};
