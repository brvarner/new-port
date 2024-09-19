import "@fontsource-variable/dm-sans";
import "../_assets/globals.css";
import { Navbar } from "@/app/_components";

export const metadata = {
  title: "Brandon Varner",
  description:
    "I'm a Java, C++, Next.js, Ruby on Rails, React, and React Native developer! Learn more on my site.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className={`subpixel-antialiased`}>
        <Navbar />
        <main className="w-11/12 m-auto">{children}</main>
      </body>
    </html>
  );
}
