import { Button, Link, TextField, Typography } from "@mui/material";

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
      <Typography variant="body2">
        By signing up, you agree to our{" "}
        <Link href="/login">terms & conditions</Link> and{" "}
        <Link href="/login">privacy policy</Link>
      </Typography>
    </form>
  );
};

export default SignUpForm;
