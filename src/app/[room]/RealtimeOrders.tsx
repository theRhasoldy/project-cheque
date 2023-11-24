"use client";

import { Database, Order } from "@/lib/api/databaseTypes";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect } from "react";

const RealtimeOrders = ({ initialOrders }: { initialOrders: Order[] }) => {
  const supabaseClient = createClientComponentClient<Database>();

  useEffect(() => {
    const channel = supabaseClient.channel("realtime orders").on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "orders",
      },
      (payload) => {
        console.log("Hello", payload);
      }
    );

    return () => {
      supabaseClient.removeChannel(channel);
    };
  }, [supabaseClient]);

  return <pre>{JSON.stringify(initialOrders)}</pre>;
};

export default RealtimeOrders;
