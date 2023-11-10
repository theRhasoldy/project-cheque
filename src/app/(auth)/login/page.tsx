import { Button, Input } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <form
      action="../auth/login"
      method="post"
      className="flex flex-col w-1/2 gap-4"
    >
      <Input type="text" name="email" />
      <Input type="password" name="password" />
      <Button variant="contained" formAction="../api/login" type="submit">
        Log in
      </Button>
    </form>
  );
};

export default page;
