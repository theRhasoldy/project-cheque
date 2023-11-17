import { Database } from "@/lib/api/databaseTypes";
import { Typography } from "@mui/material";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import RealtimeOrders from "./RealtimeOrders";

type RoomPageProps = {
  searchParams: {
    id: string;
  };
};

const RoomsPage = async ({ searchParams }: RoomPageProps) => {
  const cookieStore = cookies();

  const supabaseServer = createServerComponentClient<Database>({
    cookies: () => cookieStore,
  });

  const userAuth = await supabaseServer?.auth?.getUser();

  // Add the current user as an entry in the room
  const { error: userError } = await supabaseServer.from("room_users").insert({
    room_id: String(searchParams.id),
    user_id: String(userAuth.data.user?.id),
  });

  // Initial fetching of orders in server side
  const { data } = await supabaseServer.from("orders").select();

  return (
    <>
      <Typography variant="h1">{searchParams.id}</Typography>
      <RealtimeOrders initialOrders={data ?? []} />
    </>
  );
};

export default RoomsPage;
