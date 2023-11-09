import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "./databaseTypes";

const cookieStore = cookies();

export const supabaseServer = createServerComponentClient<Database>({
  cookies: () => cookieStore,
});
