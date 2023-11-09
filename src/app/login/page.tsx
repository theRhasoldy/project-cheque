import { Button, Input } from "@mui/material";
import React from "react";

const LoginPage = async () => {
  return (
    <form action="/auth/login" method="post">
      <Input type="text" name="email" />
      <Input type="password" name="password" />
      <Button formAction="/auth/signup" type="submit">
        Sign Up
      </Button>
    </form>
  );
};

export default LoginPage;
