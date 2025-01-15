import type { Metadata } from "next";
import "./ui/globals.css";

import Navbar from "./ui/navbar/navbar";
import AnimatedBackground from "./ui/background/animatedBackground";
import { jetbrains } from "./ui/fonts";

export const metadata: Metadata = {
  title: "ed.dev",
  icons: '/eddev.png',
  description: "Edward Gatbonton's personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetbrains.className} relative p-0 m-0 box-border text-black bg-white dark:bg-gray-900 antialiased overflow-x-hidden`}
      >
        <AnimatedBackground />
        <Navbar />
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  );
}

