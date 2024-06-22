import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UIWind - Copy Tailwind CSS UI Components Easily",
  description: "UIWind offers a vast collection of Tailwind CSS UI components for designers and developers to easily copy and integrate into their projects. Enhance your workflow with our ready-to-use, customizable components.",
  keywords: "Tailwind CSS, UI components, web design, web development, frontend development, CSS framework, UI library, copy components, web components",
  robots: "index, follow",
  openGraph: {
    title: "UIWind - Copy Tailwind CSS UI Components Easily",
    description: "UIWind offers a vast collection of Tailwind CSS UI components for designers and developers to easily copy and integrate into their projects. Enhance your workflow with our ready-to-use, customizable components.",
    url: "https://www.uiwind.vercel.app",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 800,
        height: 600,
        alt: "UIWind"
      }
    ],
    siteName: "UIWind"
  },
  twitter: {
    card: "summary_large_image",
    title: "UIWind - Copy Tailwind CSS UI Components Easily",
    description: "UIWind offers a vast collection of Tailwind CSS UI components for designers and developers to easily copy and integrate into their projects. Enhance your workflow with our ready-to-use, customizable components.",
    images: "/og-image.jpg"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
    </html>
  );
}
