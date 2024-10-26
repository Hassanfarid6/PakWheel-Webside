// import type { Metadata } from "next";
// import localFont from "next/font/local";
import Navbar from "./component/Navbar"

import "./globals.css";
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
    < Navbar />
          {children}
    <footer className="mt-auto text-center text-2xl">
                       {/* Footer  */}
                <div className="mt-auto text-center text-4xl">
                    {/* <p className="text-black">Footer or additional content</p> */}
                </div>
    </footer>

    </body>
  </html>
  );
}
