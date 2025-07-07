import type { Metadata } from "next";
import "./globals.css";
import { HeaderWrapper } from "@/components/layout/HeaderWrapper";

export const metadata: Metadata = {
  title: "혜택모아",
  description: "다양한 혜택을 모아서 보여주는 플랫폼",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="antialiased transition-colors duration-200">
        <div className="min-h-screen flex flex-col bg-white text-gray-900 transition-colors duration-200">
          <HeaderWrapper />
          <main className="flex-1 p-4 ">{children}</main>
        </div>
      </body>
    </html>
  );
}
