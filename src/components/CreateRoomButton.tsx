"use client";

import config from "../../tailwind.config";
import resolveConfig from "tailwindcss/resolveConfig";
import Button from "@mui/material/Button";
import { Typography, useTheme } from "@mui/material";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/lib/api/databaseTypes";
import { useRouter } from "next/navigation";
import { useState } from "react";
import AddIcon from "./icons/AddIcon";

const CreateRoomButton = () => {
  const tailwindConfig = resolveConfig(config);
  const mode = useTheme();
  const router = useRouter();

  const supabaseClient = createClientComponentClient<Database>();

  const [loading, setLoading] = useState(false);

  const createRoom = async () => {
    setLoading(true);
    const { error } = await supabaseClient
      .from("rooms")
      .insert({ name: "Room 1" });

    if (!error) {
      setLoading(false);
      router.refresh();
    } else return;
  };

  return (
    <Button
      onClick={createRoom}
      disabled={loading}
      variant="outlined"
      className="flex flex-col md:flex-row gap-4 md:gap-2 w-full h-56 !mt-12"
      startIcon={
        <AddIcon
          fill={
            loading
              ? tailwindConfig.theme.colors[mode.palette.mode].grey[100]
              : tailwindConfig.theme.colors[mode.palette.mode].primary.main
          }
        />
      }
    >
      <Typography fontWeight={600} variant="h3">
        Create a cheque
      </Typography>
    </Button>
  );
};

export default CreateRoomButton;
