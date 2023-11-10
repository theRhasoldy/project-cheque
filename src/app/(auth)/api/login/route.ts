import { Database } from "@/lib/api/databaseTypes";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const requestUrl = new URL(request.url);
  const formData = await request.formData();

  // get data from form
  const email = formData.get("email")?.toString() ?? "";
  const password = formData.get("password")?.toString() ?? "";

  // setup route handler
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient<Database>({
    cookies: () => cookieStore,
  });

  const user = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  console.log(user);

  return NextResponse.redirect(requestUrl.origin, { status: 301 });
};
