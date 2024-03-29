import type { Metadata } from "next";
import {  Syne } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import Header from "@/components/Header";

const syne = Syne({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-slate-900 ">
      <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Syne:wght@400;700&display=swap"
        rel="stylesheet"
      />
      </Head>
      <body className={syne.className}>
      <Header/>
        
        {children}
        <div className="">
          
        </div>
        </body>
    </html>
  );
}
