import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";



export const metadata: Metadata = {
  title: "World Tree Demo App",
  description: "ab Nunzio Alessandro Sisto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
