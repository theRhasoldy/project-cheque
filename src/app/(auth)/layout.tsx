import { ReactNode } from "react";
import TabBar from "./TabBar";
import InvalidMessage from "./InvalidMessage";

const RegisterPage = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <TabBar />
      {children}
      <InvalidMessage />
    </div>
  );
};

export default RegisterPage;
