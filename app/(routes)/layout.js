import localFont from "next/font/local";
import "../_assets/globals.css";
import Navbar from "../_components/navbar";
import BentoGrid from "@bentogrid/core";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Brandon Varner",
  description:
    "I'm a Next.js, React, Ruby on Rails, Java, and React Native developer! Learn more on my site.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="w-11/12 mx-auto">{children}</main>
      </body>
    </html>
  );
}
