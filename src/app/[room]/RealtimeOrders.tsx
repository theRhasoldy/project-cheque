"use client";

import { Database, Order } from "@/lib/api/databaseTypes";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const RealtimeOrders = ({ initialOrders }: { initialOrders: Order[] }) => {
  const [roomOrders, setRoomOrders] = useState<Order[]>(initialOrders);
  const router = useRouter();

  const supabaseClient = createClientComponentClient<Database>();

  // Listen to INSERT in orders table and add to the frontend side
  useEffect(() => {
    const channel = supabaseClient
      .channel("orders")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "orders" },
        (payload) => {
          setRoomOrders((prev) => [...prev, payload.new as Order]);
        }
      )
      .subscribe();

    return () => {
      supabaseClient.removeChannel(channel);
    };
  }, [supabaseClient]);

  // Listen to DELETE in orders table and update the list in the frontend side
  useEffect(() => {
    const channel = supabaseClient
      .channel("orders")
      .on(
        "postgres_changes",
        { event: "DELETE", schema: "public", table: "orders" },
        ({ old }) =>
          setRoomOrders((prev) =>
            prev.filter((prevOrder) => prevOrder.id !== old.id)
          )
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
