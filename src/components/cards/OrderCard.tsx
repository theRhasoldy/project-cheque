import { Database, Order } from "@/lib/api/databaseTypes";
import { Card, CardContent, Typography } from "@mui/material";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Image from "next/image";
import React from "react";

type OrderCardProps = {
  details: Order;
};

const OrderCard = async ({ details }: OrderCardProps) => {
  const supabaseServer = createClientComponentClient<Database>();

  const { data: ownerDetails } = await supabaseServer
    .from("users")
    .select()
    .eq("id", details.user_id)
    .single();

  return (
    <Card className="w-full h-56 hover:shadow-2xl bg-dark-primary-main">
      <CardContent className="grid grid-cols-[1fr_3fr] h-fit">
        <Image
          src="/img/auth-cover.jpg"
          alt={`Image of ${details.name} ordered by ${ownerDetails?.username}`}
          quality={100}
          width={200}
          height={200}
        />
        <div>
          <Typography variant="h3">{details.name}</Typography>
          <Typography variant="h4">{ownerDetails?.username}</Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderCard;
