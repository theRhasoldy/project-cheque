import React from "react";
import { supabaseServer } from "@/lib/api/supabase";
import RoomCard from "@/components/RoomCard";

const RoomList = async () => {
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
