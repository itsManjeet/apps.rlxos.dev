import type {Metadata} from "next";
import "@/styles/globals.css";
import PrelineScript from "@/components/PrelineScript";
import {NavigationBar} from "@/components/NavigationBar";
import {Footer} from "@/components/Footer";

export const metadata: Metadata = {
  title: "Bazaar",
  description: "Application Market for rlxos",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body>
    <NavigationBar />
    {children}
    <Footer />
    </body>
    <PrelineScript />
    </html>
  );
}
