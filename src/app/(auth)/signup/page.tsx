import { Button, TextField } from "@mui/material";

const SignUpForm = () => {
  return (
    <form
      action="../api/signup"
      method="post"
      className="flex flex-col w-1/2 gap-4"
    >
      <TextField type="text" name="email" />
      <TextField type="text" name="username" />
      <TextField type="text" name="avatar" />
      <TextField type="password" name="password" />
      <Button variant="contained" formAction="../api/signup" type="submit">
        Sign Up
      </Button>
    </form>
  );
};

export default SignUpForm;
