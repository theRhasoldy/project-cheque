import { ReactNode } from "react";
import TabBar from "./TabBar";

const RegisterPage = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <TabBar />
      {children}
    </div>
  );
};

export default RegisterPage;
