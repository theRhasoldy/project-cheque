import { Button, Input } from "@mui/material";

const SignUpForm = () => {
  return (
    <form
      action="../api/signup"
      method="post"
      className="flex flex-col w-1/2 gap-4"
    >
      <Input type="text" name="email" />
      <Input type="text" name="username" />
      <Input type="text" name="avatar" />
      <Input type="password" name="password" />
      <Button variant="contained" formAction="../api/signup" type="submit">
        Sign Up
      </Button>
    </form>
  );
};

export default SignUpForm;
