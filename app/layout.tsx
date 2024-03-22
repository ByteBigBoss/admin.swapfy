import type { Metadata } from "next";
import { Inter as FontSans} from "next/font/google";
import "@/app/globals.css";

import { cn } from "@/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Swapfy | Admin",
  description: "Exchange your items for items and buy whatever you want with swapfy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
       className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}
      >{children}</body>
    </html>
  );
}
