"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  console.log(theme);

  return (
    <>
      {theme === "light" ? (
        <Button
          variant={"outline"}
          className="rounded-none border-y-0"
          onClick={() => setTheme("dark")}
        >
          <MoonIcon />
        </Button>
      ) : theme === "dark" ? (
        <Button
          variant={"outline"}
          className="rounded-none border-y-0"
          onClick={() => setTheme("light")}
        >
          <SunIcon />
        </Button>
      ) : (
        <Button
          variant={"outline"}
          className="rounded-none border-y-0"
          onClick={() => setTheme("dark")}
        >
          <MoonIcon />
        </Button>
      )}
    </>
  );
}
