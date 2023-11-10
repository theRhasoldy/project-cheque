"use client";

import { Tab, Tabs } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";

const TabBar = () => {
  const pathname = usePathname();
  const [tabValue, setTabValue] = useState<string>(
    pathname.split("/").at(-1) ?? "login"
  );
  const router = useRouter();

  const handleChange = (
    event: SyntheticEvent<Element, Event>,
    newValue: string
  ): void => {
    setTabValue(newValue);
    router.push(`/${newValue}`);
  };

  return (
    <div>
      <Tabs
        value={tabValue}
        onChange={handleChange}
        aria-label="Registration tabs between login and sign up"
      >
        <Tab value={"login"} label="Log In" id={"register-tab-0"} />
        <Tab value={"signup"} label="Sign Up" id={"register-tab-1"} />
      </Tabs>
    </div>
  );
};

export default TabBar;