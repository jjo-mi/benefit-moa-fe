import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import "./globals.css";

const geistSans = Geist({ 
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "혜택모아",
  description: "다양한 혜택을 모아서 보여주는 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200`}
      >
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
