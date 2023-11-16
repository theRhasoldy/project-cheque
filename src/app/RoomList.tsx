import React from "react";
import RoomCard from "@/components/RoomCard";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/lib/api/databaseTypes";

const RoomList = async () => {
  const cookieStore = cookies();

  const supabaseServer = createServerComponentClient<Database>({
    cookies: () => cookieStore,
  });

  const { data: roomsData, error } = await supabaseServer
    .from("rooms")
    .select()
    .eq("owner", "6a9bd2ec-7703-43ec-877e-99b30ffefded");

  error && console.log(error.message);
  console.log(roomsData);

  return (
    <>
      {roomsData?.map((room) => <RoomCard key={room?.id} name={room?.name} />)}
    </>
  );
};

export default RoomList;
