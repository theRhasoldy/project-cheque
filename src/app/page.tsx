import CreateRoomButton from "@/components/CreateRoomButton";
import RoomCard from "@/components/RoomCard";
import { supabaseServer } from "@/lib/api/supabase";
import Typography from "@mui/material/Typography";

export const revalidate = 0;

export default async function Home() {
  const userAuth = await supabaseServer?.auth?.getUser();

  const { data: userData } = await supabaseServer
    .from("users")
    .select("username")
    .eq("id", String(userAuth?.data?.user?.id));

  const { data: roomsData, error } = await supabaseServer
    .from("rooms")
    .select()
    .eq("owner", "6a9bd2ec-7703-43ec-877e-99b30ffefded");

  error && console.log(error.message);
  console.log(roomsData);

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
          {roomsData?.map((room) => (
            <RoomCard key={room?.id} name={room?.name} />
          ))}
        </div>
      </div>
    </main>
  );
}
