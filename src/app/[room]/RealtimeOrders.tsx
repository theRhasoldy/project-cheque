"use client";

import { Order } from "@/lib/api/databaseTypes";

const RealtimeOrders = ({ initialOrders }: { initialOrders: Order[] }) => {
  return <pre>{JSON.stringify(initialOrders)}</pre>;
};

export default RealtimeOrders;
