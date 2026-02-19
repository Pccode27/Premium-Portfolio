import "./globals.css";
import Navbar from "@/components/ui/layout/Navbar";
import Footer from "@/components/ui/layout/Footer";
import CursorGlow from "@/components/ui/CursorGlow";
import { AnimatePresence, motion } from "framer-motion"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-[#0b0f1a] dark:text-white transition-colors duration-300 overflow-x-hidden">
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-[-200px] left-1/2 -translate-x-1/2
           w-[400px] h-[400px] md:w-[700px] md:h-[700px] bg-violet-600/20 blur-[160px] rounded-full" />
          <div className="absolute bottom-[-200px] right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-cyan-500/20 blur-[150px] rounded-full" />
        </div>
       
        <Navbar />
        <CursorGlow/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
