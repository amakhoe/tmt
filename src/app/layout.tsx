import type { Metadata } from "next";
import "./globals.css";
import { twMerge } from "tailwind-merge";



export const metadata: Metadata = {
  title: "TMT",
  description: "A landing page for the TMT group",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
      
    </html>
  );
}
