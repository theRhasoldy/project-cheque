"use client";

import { useSearchParams } from "next/navigation";
import React from "react";

const InvalidMessage = () => {
  const params = useSearchParams();

  if (params.get("error"))
    return <div className="text-light-primary-main">{params.get("error")}</div>;
};

export default InvalidMessage;
