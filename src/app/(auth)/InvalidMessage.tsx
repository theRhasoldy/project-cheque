"use client";

import { useSearchParams } from "next/navigation";
import React from "react";

const InvalidMessage = () => {
  const params = useSearchParams();

  if (params.get("status"))
    return (
      <div className="text-light-primary-main">
        Your Email or Passowrd is Incorrect
      </div>
    );
};

export default InvalidMessage;
