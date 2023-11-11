import { Button, Link, TextField, Typography } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-4 w-8/12">
      <Typography className="!mb-4" variant="h1">
        Welcome Back!
      </Typography>
      <form
        action="../auth/login"
        method="post"
        className="flex flex-col gap-4"
      >
        <TextField placeholder="Email Address" type="text" name="email" />
        <TextField placeholder="Password" type="password" name="password" />
        <Button
          variant="contained"
          size="xlarge"
          formAction="../api/login"
          type="submit"
        >
          Log in
        </Button>
      </form>
      <Typography variant="body2">
        Are you new here? <Link href="/signup">Join Us Now!</Link>
      </Typography>
    </div>
  );
};

export default page;
