"use client";

import config from "../../tailwind.config";
import resolveConfig from "tailwindcss/resolveConfig";
import Button from "@mui/material/Button";
import { Typography, useTheme } from "@mui/material";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/lib/api/databaseTypes";
import { useCallback, useEffect, useState } from "react";

const CreateRoomButton = () => {
  const tailwindConfig = resolveConfig(config);
  const mode = useTheme();

  const [room, setRoom] = useState();

  const supabaseClient = createClientComponentClient<Database>();

  const getUserId = useCallback(async () => {
    const auth = await supabaseClient.auth.getUser();
    return auth.data.user?.id;
  }, [supabaseClient.auth]);

  const fetchUserRoom = useCallback(async () => {
    const { data } = await supabaseClient
      .from("rooms")
      .select()
      .eq("owner", String(await getUserId()));

    setRoom(data);
  }, [getUserId, supabaseClient]);

  const createRoom = async () => {
    await supabaseClient.from("rooms").insert({ name: "Room 1" });
    fetchUserRoom();
  };

  useEffect(() => {
    !room && fetchUserRoom();
    console.log(room);
  }, [fetchUserRoom, supabaseClient, room]);

  return (
    <>
      <Button
        onClick={createRoom}
        startIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 72 72"
            fill="none"
          >
            <g clipPath="url(#clip0_8_4)">
              <path
                d="M39.6 32.4H54V39.6H39.6V54H32.4V39.6H18V32.4H32.4V18H39.6V32.4ZM36 72C26.4522 72 17.2955 68.2072 10.5442 61.4558C3.79285 54.7045 0 45.5478 0 36C0 26.4522 3.79285 17.2955 10.5442 10.5442C17.2955 3.79285 26.4522 0 36 0C45.5478 0 54.7045 3.79285 61.4558 10.5442C68.2072 17.2955 72 26.4522 72 36C72 45.5478 68.2072 54.7045 61.4558 61.4558C54.7045 68.2072 45.5478 72 36 72ZM36 64.8C43.6382 64.8 50.9636 61.7657 56.3647 56.3647C61.7657 50.9636 64.8 43.6382 64.8 36C64.8 28.3618 61.7657 21.0364 56.3647 15.6353C50.9636 10.2343 43.6382 7.2 36 7.2C28.3618 7.2 21.0364 10.2343 15.6353 15.6353C10.2343 21.0364 7.2 28.3618 7.2 36C7.2 43.6382 10.2343 50.9636 15.6353 56.3647C21.0364 61.7657 28.3618 64.8 36 64.8Z"
                fill={
                  tailwindConfig.theme.colors[mode.palette.mode].primary.main
                }
              />
            </g>
            <defs>
              <clipPath id="clip0_8_4">
                <rect width="72" height="72" fill="white" />
              </clipPath>
            </defs>
          </svg>
        }
        variant="outlined"
        className="flex gap-2 w-full h-56 !mt-12"
      >
        <Typography fontWeight={600} fontSize={48} variant="h3">
          Create a cheque
        </Typography>
      </Button>
      <Typography>{room?.name}</Typography>
    </>
  );
};

export default CreateRoomButton;
