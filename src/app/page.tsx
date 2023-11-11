import CreateRoomButton from "@/components/CreateRoomButton";
import { supabaseServer } from "@/lib/api/supabase";
import Typography from "@mui/material/Typography";

export default async function Home() {
  const userAuth = await supabaseServer.auth.getUser();
  const { data } = await supabaseServer
    .from("users")
    .select("username")
    .eq("id", String(userAuth.data.user?.id));

  return (
    <main className="flex flex-col w-full h-screen justify-center items-center">
      <div className="w-1/2">
        <Typography className="flex" variant="h1">
          Hello {data?.at(0)?.username ?? "User"},
        </Typography>
        <Typography className="flex" variant="h2">
          Hope your meal was as delicious as you 🤤
        </Typography>
        <CreateRoomButton />
      </div>
    </main>
  );
}
