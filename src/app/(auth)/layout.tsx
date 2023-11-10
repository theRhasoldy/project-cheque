import { ReactNode } from "react";
import TabBar from "./TabBar";
import InvalidMessage from "./InvalidMessage";
import Image from "next/image";

const RegisterPage = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col-reverse md:grid lg:grid grid-cols-2">
      <div className="flex flex-col items-center">
        <div>
          <TabBar />
        </div>
        <div className="h-full w-full flex items-center justify-center">
          {children}
        </div>
        <InvalidMessage />
      </div>
      <div className="relative h-screen">
        <Image
          className="object-cover rounded-[3rem] p-4"
          src={"/img/auth-cover.jpg"}
          priority
          fill
          alt="Group of friends splitting the check"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
};

export default RegisterPage;
