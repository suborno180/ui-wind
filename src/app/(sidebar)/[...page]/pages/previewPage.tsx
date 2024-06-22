"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Code,
  Copy,
  Eye,
  X,
  Smartphone,
  Tablet,
  Monitor,
  Laptop,
} from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import BackBTN from "@/components/others/BackButton";
import { useToast } from "@/components/ui/use-toast";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import componentsData from "../../data/ComponentsData";

interface PreviewPageType {
  category: string;
  id: string;
  hosturl: any;
}

const PreviewPage: React.FC<PreviewPageType> = ({ category, id, hosturl }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const view = searchParams.get("view");
  const { toast } = useToast();
  const [device, setDevice] = useState<"phone" | "tablet" | "laptop" | "desktop">("desktop");
  const [filteredData, setFilteredData] = useState<any>(null); // Initialize filteredData state

  useEffect(() => {
    // Filter componentsData for the correct category
    const categoryData = componentsData.find(component => component.category.toLowerCase() === category.toLowerCase());

    if (categoryData) {
      // Find item within the category's items array based on id
      const item = categoryData.items.find(item => item.id === Number(id));

      if (item) {
        setFilteredData(item); // Set filtered item if found
      } else {
        console.error(`Item with id ${id} not found in category ${category}.`);
        // Optionally handle case where item with specified id is not found
      }
    } else {
      console.error(`Category ${category} not found.`);
      // Optionally handle case where category is not found
    }
  }, [category, id]);

  const handleCopy = () => {
    if (filteredData) {
      navigator.clipboard.writeText(filteredData.code);
      toast({
        title: "Copied!",
        description: "Code has been copied to clipboard.",
      });
    }
  };

  const handleDeviceChange = (device: "phone" | "tablet" | "laptop" | "desktop") => {
    setDevice(device);
  };

  const deviceClass: Record<string, string> = {
    phone: "375px",
    tablet: "768px",
    laptop: "1024px",
    desktop: "100%",
  };

  if (!filteredData) {
    return null; // Return early if filteredData is null or undefined
  }

  return (
    <div>
      <motion.div
        initial={{ y: "100vh" }}
        animate={{ y: 0 }}
        exit={{ y: "100vh" }}
        transition={{
          delay: 0.2,
          duration: 0.4,
          ease: "easeInOut",
        }}
      >
        <div className="border-b-[1px] px-4 lg:px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BackBTN />
            <h2>{view === "code" ? "Code" : "Preview"}</h2>
          </div>

          <div className="flex items-center">
            <div className="px-4 w-full h-full grid place-content-center">
              <Badge>1/3</Badge>
            </div>
            <Link
              href={`/heros/${id}?view=preview`}
              className={`border-l-[1px] min-w-10 min-h-10 grid place-content-center border-b-4 ${
                view === "preview" || !view ? "border-b-blue-600" : "border-b-transparent"
              } text-gray-500 hover:text-gray-300`}
            >
              <Eye />
            </Link>
            <Link
              href={`/heros/${id}?view=code`}
              className={`border-l-[1px] min-w-10 min-h-10 grid place-content-center border-b-4 ${
                view === "code" ? "border-b-blue-600" : "border-b-transparent"
              } text-gray-500 hover:text-gray-300`}
            >
              <Code />
            </Link>
            <button
              onClick={handleCopy}
              className="border-l-[1px] min-w-10 min-h-10 grid place-content-center text-gray-500 hover:text-gray-300"
            >
              <Copy />
            </button>
            <button className="border-l-[1px] min-w-10 min-h-10 grid place-content-center text-gray-500 hover:text-gray-300">
              <ArrowLeft />
            </button>
            <button className="border-l-[1px] min-w-10 min-h-10 grid place-content-center text-gray-500 hover:text-gray-300">
              <ArrowRight />
            </button>
            <Link
              href="/heros/"
              className="border-l-[1px] min-w-10 min-h-10 grid place-content-center text-gray-500 hover:text-gray-300"
            >
              <X />
            </Link>
          </div>
        </div>

        {view === "preview" && (
          <div className="flex justify-center mt-4 gap-2">
            {(["phone", "tablet", "laptop", "desktop"] as const).map(deviceType => (
              <button
                key={deviceType}
                onClick={() => handleDeviceChange(deviceType)}
                className={`p-2 border rounded ${device === deviceType ? "bg-muted/80" : ""}`}
              >
                {deviceType === "phone" && <Smartphone size={20} />}
                {deviceType === "tablet" && <Tablet size={20} />}
                {deviceType === "laptop" && <Laptop size={20} />}
                {deviceType === "desktop" && <Monitor size={20} />}
              </button>
            ))}
          </div>
        )}

        <div className="p-4">
          {view === "preview" && (
            <div className="border mx-auto" style={{ maxWidth: deviceClass[device] }}>
              <iframe src={`${hosturl}/${filteredData.demoUrl}`} className="w-full min-h-screen"></iframe>
            </div>
          )}
          {view === "code" && (
            <div className="border p-4 bg-gray-900 text-white">
              <SyntaxHighlighter
                lineProps={{
                  style: {
                    wordBreak: 'break-all',
                    whiteSpace: 'pre-wrap',
                  },
                }}
                language="tsx"
                style={vscDarkPlus}
                wrapLines={true}
              >
                {filteredData.code}
              </SyntaxHighlighter>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default PreviewPage;
