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
  const [currentIndex, setCurrentIndex] = useState<number>(0); // Initialize currentIndex state

  useEffect(() => {
    const categoryData = componentsData.find(component => component.category.toLowerCase() === category.toLowerCase());

    if (categoryData) {
      const item = categoryData.items.find(item => item.id === Number(id));

      if (item) {
        setFilteredData(categoryData); // Set categoryData to filteredData
        setCurrentIndex(categoryData.items.findIndex(item => item.id === Number(id))); // Set currentIndex based on item id
      } else {
        console.error(`Item with id ${id} not found in category ${category}.`);
      }
    } else {
      console.error(`Category ${category} not found.`);
    }
  }, [category, id]);

  const handleCopy = () => {
    if (filteredData) {
      navigator.clipboard.writeText(filteredData.items[currentIndex].code);
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

  const handlePrevPage = () => {
    if (!filteredData || !filteredData.items || filteredData.items.length === 0) {
      return; // Return early if data is not yet available or items array is empty
    }

    const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredData.items.length - 1;
    const prevItemId = filteredData.items[prevIndex].id;
    router.push(`/${category}/${prevItemId}?view=${view}`);
  };

  const handleNextPage = () => {
    if (!filteredData || !filteredData.items || filteredData.items.length === 0) {
      return; // Return early if data is not yet available or items array is empty
    }

    const nextIndex = currentIndex < filteredData.items.length - 1 ? currentIndex + 1 : 0;
    const nextItemId = filteredData.items[nextIndex].id;
    router.push(`/${category}/${nextItemId}?view=${view}`);
  };

  if (!filteredData || !filteredData.items || filteredData.items.length === 0) {
    return null; // Return early if filteredData or its items are not valid
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
        <div className="border-b-[1px] px-2 lg:px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BackBTN />
            <h2>{view === "code" ? "Code" : "Preview"}</h2>
          </div>
          <div className="flex items-center">
            <div className="px-4 w-full h-full grid place-content-center">
              <Badge>{currentIndex + 1}/{filteredData.items.length}</Badge>
            </div>
            <Link
              href={`/${category}/${id}?view=preview`}
              className={`border-l-[1px] min-w-10 min-h-10 grid place-content-center border-b-4 ${
                view === "preview" || !view ? "border-b-blue-600" : "border-b-transparent"
              } text-gray-500 hover:text-gray-300`}
            >
              <Eye />
            </Link>
            <Link
              href={`/${category}/${id}?view=code`}
              className={`border-l-[1px] min-w-10 min-h-10 grid place-content-center border-b-4 ${
                view === "code" ? "border-b-blue-600" : "border-b-transparent"
              } text-gray-500 hover:text-gray-300`}
            >
              <Code />
            </Link>
            <button
              onClick={handleCopy}
              className="border-l-[1px] min-w-10 min-h-10 hidden md:grid place-content-center text-gray-500 hover:text-gray-300 "
            >
              <Copy />
            </button>
            <button
              onClick={handlePrevPage}
              className="border-l-[1px] min-w-10 min-h-10 hidden md:grid place-content-center text-gray-500 hover:text-gray-300"
            >
              <ArrowLeft />
            </button>
            <button
              onClick={handleNextPage}
              className="border-l-[1px] min-w-10 min-h-10 hidden md:grid place-content-center text-gray-500 hover:text-gray-300"
            >
              <ArrowRight />
            </button>
            <Link
              href="/${category}/"
              className="border-x-[1px] min-w-10 min-h-10 grid place-content-center text-gray-500 hover:text-gray-300"
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
            <div className="mx-auto scroll-" style={{ maxWidth: deviceClass[device] }}>
              <iframe src={`${hosturl}/${filteredData.items[currentIndex].demoUrl}`} className="w-full min-h-screen"></iframe>
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
                language="html"
                style={vscDarkPlus}
                wrapLines={true}
              >
                {filteredData.items[currentIndex].code}
              </SyntaxHighlighter>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default PreviewPage;
