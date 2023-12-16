import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Homevest",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-center">
        <main>
          <Navbar />
          <div className="mt-44 lg:mt-20 px-5 md:px-10 lg:px-20">
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
