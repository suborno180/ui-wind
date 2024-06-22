import React from "react";
import SiderBar_Template from "./components/SiderBar_Template";
import { Toaster } from "@/components/ui/toaster";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <div>
        <SiderBar_Template>
          {children}
          <Toaster />
        </SiderBar_Template>
      </div>
    </>
  );
};

export default Layout;
