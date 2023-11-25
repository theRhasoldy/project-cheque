import { ReactNode } from "react";
import TabBar from "./TabBar";
import InvalidMessage from "./InvalidMessage";
import Image from "next/image";
const RegisterPage = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen flex flex-col-reverse md:grid lg:grid grid-cols-2 bg-gradient-light-background dark:bg-gradient-dark-background">
      <div className="flex flex-col items-center">
        <div>
          <TabBar />
        </div>
        <div className="h-full w-full flex flex-col items-center justify-center">
          {children}
        </div>
        <InvalidMessage />
      </div>
      <div className="relative h-[60vh] md:h-[96vh] m-4 md:mt-4 md:mr-4">
        <Image
          className="object-cover rounded-[2.5rem] shadow-2xl"
          src="/img/auth-cover.jpg"
          priority
          fill
          alt="Group of friends splitting the check"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 100vw"
          quality={100}
        />
      </div>
    </div>
  );
};

export default RegisterPage;
