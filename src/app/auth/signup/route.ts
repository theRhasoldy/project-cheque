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
  const username = formData.get("username")?.toString() ?? "";
  const avatar_url = formData.get("avatar")?.toString() ?? "";

  // setup route handler
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient<Database>({
    cookies: () => cookieStore,
  });

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${requestUrl.origin}/auth/callback`,
    },
  });

  error && console.log(error.message);

  if (data.user) {
    // add additional user data to users table
    const { error: userError } = await supabase
      .from("users")
      .update({
        username,
        avatar_url,
      })
      .eq("id", String(data.user.id));

    userError && console.log(userError.message);

    return NextResponse.redirect(requestUrl.origin, { status: 301 });
  }
};
