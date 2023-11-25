"use client";

import { Database, Order } from "@/lib/api/databaseTypes";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";

const RealtimeOrders = ({ initialOrders }: { initialOrders: Order[] }) => {
  const [roomOrders, setRoomOrders] = useState<Order[]>(initialOrders);

  const supabaseClient = createClientComponentClient<Database>();

  useEffect(() => {
    setRoomOrders(initialOrders);
  }, [initialOrders]);

  // Listen to INSERT in orders table and add to the frontend side
  useEffect(() => {
    const channel = supabaseClient
      .channel("add-order")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "orders" },
        (payload) => {
          console.log(payload);
          return setRoomOrders((prev) => [...prev, payload.new as Order]);
        }
      )
      .subscribe();

    return () => {
      supabaseClient.removeChannel(channel);
    };
  }, [initialOrders, supabaseClient]);

  // Listen to DELETE in orders table and update the list in the frontend side
  useEffect(() => {
    const channel = supabaseClient
      .channel("delete-order")
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
