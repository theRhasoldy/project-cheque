import { Database, Order, User } from "@/lib/api/databaseTypes";
import { Card, CardContent, Typography } from "@mui/material";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Image from "next/image";
import React, { useState, useEffect } from "react";

type OrderCardProps = {
  details: Order;
};

const OrderCard = ({ details }: OrderCardProps) => {
  const supabaseClient = createClientComponentClient<Database>();
  const [ownerDetails, setDetails] = useState<User>();

  useEffect(() => {
    const fetchOrderDetails = async () => {
      const { data } = await supabaseClient
        .from("users")
        .select()
        .eq("id", details.user_id)
        .single();

      setDetails(data as User);
    };

    fetchOrderDetails();
  }, [details.user_id, supabaseClient]);

  return (
    <Card className="w-full h-56 hover:shadow-2xl bg-dark-primary-main">
      <CardContent className="grid grid-cols-[1fr_3fr] h-fit">
        <Image
          src="/img/auth-cover.jpg"
          alt={`Image of ${details?.name} ordered by ${ownerDetails?.username}`}
          quality={100}
          width={200}
          height={200}
        />
        <div>
          <Typography variant="h3">{ownerDetails?.username}</Typography>
          <Typography variant="h3">{details?.name}</Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderCard;
