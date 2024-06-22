"use client";
// Import necessary modules and components
import React, { useState } from "react";
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
import { notFound, useRouter, useSearchParams } from "next/navigation";
import BackBTN from "@/components/others/BackButton";
import { useToast } from "@/components/ui/use-toast";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import componentsData from "../../data/ComponentsData";

interface PreviewPagetype {
    catagory: string;
    id: string;
    hosturl: any;
}
// Define the page component
const PreviewPage = ({ catagory, id, hosturl }: PreviewPagetype) => {
  const searchParams = useSearchParams();
  const route = useRouter();
  const view = searchParams.get("view");
  const { toast } = useToast();
  const [device, setDevice] = useState<
    "phone" | "tablet" | "laptop" | "desktop"
  >("desktop");


const finterData = componentsData.filter(component => component.catagory.toLowerCase() === catagory.toLowerCase()).filter(item => item.id === Number(id))

// if (!finterData) notFound()


  // Handle Copy functionality
  const handleCopy = () => {
    navigator.clipboard.writeText(finterData[0].items[0].code as any);
    toast({
      title: "Copied!",
      description: "Code has been copied to clipboard.",
    });
  };

  // Handle device change
  const handleDeviceChange = (
    device: "phone" | "tablet" | "laptop" | "desktop"
  ) => {
    setDevice(device);
  };

  // Device class mapping for different viewports
  const deviceClass: Record<string, string> = {
    phone: "375px",
    tablet: "768px",
    laptop: "1024px",
    desktop: "100%",
  };

  // Component rendering
// console.log(componentsData)



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
                view === "preview" || !view
                  ? "border-b-blue-600"
                  : "border-b-transparent"
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
              className={`border-l-[1px] min-w-10 min-h-10 grid place-content-center text-gray-500 hover:text-gray-300`}
            >
              <X />
            </Link>
          </div>
        </div>
        {view === "preview" && (
          <div className="flex justify-center mt-4 gap-2">
            <button
              onClick={() => handleDeviceChange("phone")}
              className={`p-2 border rounded ${
                device === "phone" ? "bg-muted/80" : ""
              }`}
            >
              <Smartphone size={20} />
            </button>
            <button
              onClick={() => handleDeviceChange("tablet")}
              className={`p-2 border rounded ${
                device === "tablet" ? "bg-muted/80" : ""
              }`}
            >
              <Tablet size={20} />
            </button>
            <button
              onClick={() => handleDeviceChange("laptop")}
              className={`p-2 border rounded ${
                device === "laptop" ? "bg-muted/80" : ""
              }`}
            >
              <Laptop size={20} />
            </button>
            <button
              onClick={() => handleDeviceChange("desktop")}
              className={`p-2 border rounded ${
                device === "desktop" ? "bg-muted/80" : ""
              }`}
            >
              <Monitor size={20} />
            </button>
          </div>
        )}

        <div className="p-4">
          {view === "preview" && (
            <div
              className={`border mx-auto`}
              style={{ maxWidth: deviceClass[device] }}
            >
                <iframe src={`${hosturl}/${finterData[0].items[0].demoUrl}`} className="w-full min-h-screen"></iframe>
              {/* <div dangerouslySetInnerHTML={{ __html: finterData[0].items[0].code }}></div> */}
            </div>
          )}
          {view === "code" && (
            <div className="border p-4 bg-gray-900 text-white">
              <SyntaxHighlighter 
              lineProps={
                {
                  style: {
                    wordBreak: 'break-all', 
                    whiteSpace: 'pre-wrap'
                  }
                }
              } 
              language="tsx" 
              style={vscDarkPlus} 
              wrapLines={true} 
              // showLineNumbers={true}
              >
                {finterData[0].items[0].code as any}
              </SyntaxHighlighter>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

// Export the PreviewPage component as default
export default PreviewPage;
