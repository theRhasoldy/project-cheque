import Typography from "@mui/material/Typography";
import { supabaseServer } from "@/lib/api/supabase";
import { Suspense } from "react";
import RoomList from "./RoomList";
import CreateRoomButton from "@/components/CreateRoomButton";
import { Skeleton } from "@mui/material";

export const revalidate = 0;

export default async function Home() {
  const userAuth = await supabaseServer?.auth?.getUser();

  const { data: userData } = await supabaseServer
    .from("users")
    .select("username")
    .eq("id", String(userAuth?.data?.user?.id));

  return (
    <main className="flex flex-col w-full h-screen items-center">
      <div className="mt-[8vw] w-1/2">
        <Typography className="flex" variant="h1">
          Hello {userData?.at(0)?.username ?? "User"},
        </Typography>
        <Typography className="flex" variant="h2">
          Hope your meal was as delicious as you 🤤
        </Typography>
        <div className="flex flex-col gap-8">
          <CreateRoomButton />
          <Suspense fallback={<Skeleton />}>
            <RoomList />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
