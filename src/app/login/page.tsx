import React from "react";

const LoginPage = () => {
  return (
    <form action="/auth/login" method="post">
      <input type="text" name="email" />
      <input type="password" name="password" />
      <button formAction="/auth/signup" type="submit">
        Sign Up
      </button>
    </form>
  );
};

export default LoginPage;
