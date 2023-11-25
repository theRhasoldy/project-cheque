"use client";

import { Database, Order } from "@/lib/api/databaseTypes";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";

const RealtimeOrders = ({ initialOrders }: { initialOrders: Order[] }) => {
  const [roomOrders, setRoomOrders] = useState<Order[]>(initialOrders);

  const supabaseClient = createClientComponentClient<Database>();

  useEffect(() => {
    const channel = supabaseClient
      .channel("orders")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "orders" },
        (payload) => setRoomOrders((prev) => [...prev, payload.new as Order])
      )
      .subscribe();

    return () => {
      supabaseClient.removeChannel(channel);
    };
  }, [supabaseClient]);

  return (
    <>
      {roomOrders.map((order) => (
        <p key={order.id}>{order.name}</p>
      ))}
    </>
  );
};

export default RealtimeOrders;
