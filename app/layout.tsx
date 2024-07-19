import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { lato } from "./fonts";

export const metadata: Metadata = {
  title: "Virtual Sentinel",
  description:
    "Virtual Sentinel is an app that provides formations and news about cybersecurity to individuals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${lato.className} bg-blue-950`}>
        {/* <body className={lato.className}> */}
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
      </body>
      <Footer />
    </html>
  );
}
