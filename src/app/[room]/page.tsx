import { Database } from "@/lib/api/databaseTypes";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

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

  const { error: userError } = await supabaseServer.from("room_users").insert({
    room_id: searchParams.id,
    user_id: userAuth.data.user?.id,
  });

  return <div>{searchParams.id}</div>;
};

export default RoomsPage;
