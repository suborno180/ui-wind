"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import componentsData from "./data/ComponentsData";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { Code, Copy, Eye } from "lucide-react";

export default function Home() {

  return (
    <div>
      <motion.div
        initial={{ y: "100vh" }} // Start just off the bottom of the viewport
        animate={{ y: 0 }}
        exit={{ y: "100vh" }} // Exit just off the bottom of the viewport
        transition={{
          delay: 0.2,
          duration: 0.4,
          ease: "easeInOut",
        }} // Smooth animation with spring effect
      >
        <div className="border-b-[1px] mb-4  px-4 py-4 lg:px-4">
          <h2>Blocks</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5  px-4 py-6 lg:px-8">
          {componentsData.map((item) => (
            <>
              <Card>
                <CardContent className="p-4">
                  <Image
                    src="/block.dark.svg"
                    alt="image"
                    width={500}
                    height={350}
                  />
                </CardContent>
                <CardFooter className="flex items-center justify-end border p-0 border-x-0 border-b-0">
                  <Link
                    href={`/tailwind-comps/heros/${item.id}?view=preview`}
                    className="border-l-[1px] min-w-10 min-h-10 grid place-content-center text-gray-500 hover:text-gray-300"
                  >
                    <Eye />
                  </Link>
                  <Link
                    href={`/tailwind-comps/heros/${item.id}?view=code`}
                    className="border-l-[1px] min-w-10 min-h-10 grid place-content-center text-gray-500 hover:text-gray-300"
                  >
                    <Code />
                  </Link>
                  <button className="border-l-[1px] min-w-10 min-h-10 grid place-content-center text-gray-500 hover:text-gray-300">
                    <Copy />
                  </button>
                </CardFooter>
              </Card>
            </>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
