import { Button, Link, TextField, Typography } from "@mui/material";

const SignUpForm = () => {
  return (
    <div className="flex flex-col gap-4 w-8/12">
      <div className="mb-6 flex flex-col gap-2">
        <Typography variant="h1">
          Welcome to{" "}
          <span className="text-light-secondary-main dark:text-dark-secondary-main">
            Cheque
          </span>
        </Typography>
        <Typography>
          Tired of your friends taking advantage of your bad math skills? Join
          us now!
        </Typography>
      </div>
      <form
        action="../api/signup"
        method="post"
        className="flex flex-col gap-4"
      >
        <TextField placeholder="Email Address" type="email" name="email" />
        <TextField placeholder="Username" type="text" name="username" />
        <TextField placeholder="Avatar" type="text" name="avatar" />
        <TextField placeholder="Password" type="password" name="password" />
        <Button
          variant="contained"
          size="xlarge"
          formAction="../api/signup"
          type="submit"
        >
          Sign Up
        </Button>
      </form>
      <Typography variant="body2">
        Already have an account? <Link href="/login">Login</Link>
      </Typography>
      <Typography color="GrayText" variant="body2">
        By signing up, you agree to our{" "}
        <Link href="/login">terms & conditions</Link> and{" "}
        <Link href="/login">privacy policy</Link>
      </Typography>
    </div>
  );
};

export default SignUpForm;
