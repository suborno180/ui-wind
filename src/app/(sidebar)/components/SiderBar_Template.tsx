"use client";
import React from "react";
import { AnimatePresence } from "framer-motion";
import { Sidebar } from "./sidebar";
import { UiComponentsList } from "../data/UiComponentsList";
import { Menu } from "./menu";
import { useRouter } from "next/router";
import { ModeToggle } from "@/components/ModeToggle";

const SiderBar_Template = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  // const router = useRouter();
  // console.log(router.route);
  return (
    <>
      <div className="block">
        <div className="flex items-center justify-between px-2 lg:px-4">
          <Menu />
          <ModeToggle />
        </div>
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
