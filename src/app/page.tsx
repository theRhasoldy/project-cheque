import Typography from "@mui/material/Typography";
import { Suspense } from "react";
import RoomList from "./RoomList";
import CreateRoomButton from "@/components/CreateRoomButton";
import { Skeleton } from "@mui/material";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/lib/api/databaseTypes";

export const revalidate = 0;

export default async function Home() {
  const cookieStore = cookies();

  const supabaseServer = createServerComponentClient<Database>({
    cookies: () => cookieStore,
  });

  const userAuth = await supabaseServer?.auth?.getUser();

  const { data: userData } = await supabaseServer
    .from("users")
    .select("username")
    .eq("id", String(userAuth?.data?.user?.id));

  return (
    <main className="flex flex-col h-screen items-center mx-8">
      <div className="mt-[15vh]">
        <Typography className="flex" variant="h1">
          Hello {userData?.at(0)?.username ?? "User"},
        </Typography>
        <Typography className="flex" variant="h2">
          Hope your meal was as delicious as you 🤤
        </Typography>
        <div className="flex flex-col gap-8 mb-[15vh]">
          <CreateRoomButton />
          <Suspense fallback={<Skeleton variant="rectangular" height={56} />}>
            <RoomList />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
