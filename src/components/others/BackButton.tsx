"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const BackBTN = () => {
  const router = useRouter();
  const Back = () => {
    router.back();
  };
  return (
    <>
      <Button onClick={Back} variant="outline" size="icon" className="h-7 w-7">
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Back</span>
      </Button>
    </>
  );
};

export default BackBTN;
