import { Button, TextField, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <form
        action="../auth/login"
        method="post"
        className="flex flex-col w-1/2 gap-4"
      >
        <TextField type="text" name="email" />
        <TextField type="password" name="password" />
        <Button variant="contained" formAction="../api/login" type="submit">
          Log in
        </Button>
      </form>
      <Typography>
        Are you new here?
        <Link href="/signup">Join Us Now!</Link>
      </Typography>
    </>
  );
};

export default page;
