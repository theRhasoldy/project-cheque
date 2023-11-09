import { Button, Input } from "@mui/material";
import React from "react";

const LoginPage = async () => {
  return (
    <form
      action="/auth/login"
      method="post"
      className="flex flex-col w-1/2 gap-4"
    >
      <Input type="text" name="email" />
      <Input type="text" name="username" />
      <Input type="text" name="avatar" />
      <Input type="password" name="password" />
      <Button variant="contained" formAction="/auth/signup" type="submit">
        Sign Up
      </Button>
    </form>
  );
};

export default LoginPage;
