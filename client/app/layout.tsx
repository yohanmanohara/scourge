import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {NextUIProvider} from "@nextui-org/react"; 
import Navbar from "@/app/components/NavBar/navbar";
import { getServerSession } from "next-auth";
import SessionProvider  from "@/app/components/other/SessionProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en">
   
      <body className={inter.className}>    
      <NextUIProvider> <SessionProvider session={session} >
        <div className="bg-black  h-max">
        <Navbar />
          {children}
          </div>
          </SessionProvider>
      </NextUIProvider>
      </body>
    </html>
  );
}
