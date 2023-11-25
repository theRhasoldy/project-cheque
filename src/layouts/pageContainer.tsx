import React, { ReactNode } from "react";

const PageContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col h-screen items-center mx-8">
      <div className="mt-[15vh]">{children}</div>
    </div>
  );
};

export default PageContainer;
