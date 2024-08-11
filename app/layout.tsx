import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sticky Note",
  description: "Plan your tasks!",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <div className="background">
          <div className="navbar">
            <NavBar />
          </div>
          <div>
            {children}
          </div>
        </div>
        </body>
    </html>
  );
}
