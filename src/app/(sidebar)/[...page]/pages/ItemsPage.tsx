"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Code, Copy, Eye } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";
import componentsData from "../../data/ComponentsData";
import { useToast } from "@/components/ui/use-toast";

const ItemPage = ({ category }: { category: string }) => {
  const { toast } = useToast();
  const data = componentsData.find(
    (component) => component.category.toLowerCase() === category.toLowerCase()
  );

  const handleCopy = () => {
    navigator.clipboard.writeText(data?.items[0]?.code || "");
    toast({
      title: "Copied!",
      description: "Code has been copied to clipboard.",
    });
  };

  return (
    <motion.div
      initial={{ y: "100vh" }}
      animate={{ y: 0 }}
      exit={{ y: "100vh" }}
      transition={{ delay: 0.2, duration: 0.4, ease: "easeInOut" }}
    >
      <div className="border-b-[1px] mb-4 px-4 py-4 lg:px-4">
        <h2>Blocks</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 px-4 py-6 lg:px-8">
        {data?.items.map((item) => (
          <Card key={item.id}>
            <CardContent className="p-4">
              <Image
                src={item.image}
                alt="Image"
                width={500}
                height={350}
                objectFit="cover"
              />
            </CardContent>
            <CardFooter className="flex items-center justify-end border p-0 border-x-0 border-b-0">
              <Link className="border-l-[1px] min-w-10 min-h-10 grid place-content-center text-gray-500 hover:text-gray-300" href={`/${category}/${item.id}?view=preview`} passHref>
                  <Eye />
              </Link>
              <Link className="border-l-[1px] min-w-10 min-h-10 grid place-content-center text-gray-500 hover:text-gray-300" href={`/${category}/${item.id}?view=code`} passHref>
                  <Code />
              </Link>
              <button className="border-l-[1px] min-w-10 min-h-10 grid place-content-center text-gray-500 hover:text-gray-300"
                
                onClick={handleCopy}
              >
                <Copy />
              </button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </motion.div>
  );
};

export default ItemPage;
