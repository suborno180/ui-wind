"use client";
import React from "react";
import { AnimatePresence } from "framer-motion";
import { Sidebar } from "./sidebar";
import { UiComponentsList } from "../data/UiComponentsList";
import { Menu } from "./menu";
import { useRouter } from "next/router";

const SiderBar_Template = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  // const router = useRouter();
  // console.log(router.route);
  return (
    <>
      <div className="block">
        <Menu />
        <div className="border-t">
          <div className="bg-background">
            <div className="grid lg:grid-cols-5">
              <Sidebar
                playlists={UiComponentsList}
                className="hidden lg:block"
              />
              <div className="col-span-3 lg:col-span-4 lg:border-l">
                <div className="h-full">
                  <AnimatePresence mode="wait">{children}</AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SiderBar_Template;
