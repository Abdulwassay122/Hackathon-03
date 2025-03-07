import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { CartWrapper } from "./Contexts/CartContext";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";
import TopLoadingBar from "@/components/Loader/TopLoadingBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
export const metadata: Metadata = {
  title:  `Nike`,
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartWrapper>
          <Navbar/>
          <TopLoadingBar/>
          {children}
          <Footer/>
        </CartWrapper>
      </body>
    </html>
  );
}
